#!/usr/bin/env python3
"""Module that defines a Cache class backed by a Redis store."""
import uuid
from functools import wraps
from typing import Callable, Optional, Union

import redis


def count_calls(method: Callable) -> Callable:
    """Decorate a Cache method to count how many times it is called.

    Each call increments a counter in Redis keyed by the method's
    qualified name.
    """
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """Increment the call counter and invoke the original method."""
        self._redis.incr(key)
        return method(self, *args, **kwargs)

    return wrapper


def call_history(method: Callable) -> Callable:
    """Decorate a Cache method to store the history of its inputs/outputs.

    Inputs are stored in a Redis list keyed by "<qualname>:inputs" and
    outputs are stored in a Redis list keyed by "<qualname>:outputs".
    """
    input_key = "{}:inputs".format(method.__qualname__)
    output_key = "{}:outputs".format(method.__qualname__)

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """Record the call's input, execute it, and record its output."""
        self._redis.rpush(input_key, str(args))
        output = method(self, *args, **kwargs)
        self._redis.rpush(output_key, str(output))
        return output

    return wrapper


def replay(method: Callable) -> None:
    """Display the history of calls of a particular Cache method.

    Prints how many times the method was called, followed by each
    recorded call's inputs and corresponding output.
    """
    redis_instance = method.__self__._redis
    qualname = method.__qualname__
    input_key = "{}:inputs".format(qualname)
    output_key = "{}:outputs".format(qualname)

    calls = redis_instance.get(qualname)
    calls = int(calls) if calls else 0
    print("{} was called {} times:".format(qualname, calls))

    inputs = redis_instance.lrange(input_key, 0, -1)
    outputs = redis_instance.lrange(output_key, 0, -1)

    for input_args, output in zip(inputs, outputs):
        print("{}(*{}) -> {}".format(
            qualname,
            input_args.decode("utf-8"),
            output.decode("utf-8"),
        ))


class Cache:
    """Cache class that stores and retrieves data using Redis."""

    def __init__(self) -> None:
        """Initialize the Cache instance with a fresh Redis store."""
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store the given data in Redis under a randomly generated key.

        Returns the generated key used to retrieve the data later.
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(
        self,
        key: str,
        fn: Optional[Callable] = None,
    ) -> Union[str, bytes, int, float, None]:
        """Retrieve the value stored at key, optionally converted by fn.

        If the key does not exist, the original Redis.get behavior
        (returning None) is preserved.
        """
        value = self._redis.get(key)
        if value is None:
            return None
        if fn is not None:
            return fn(value)
        return value

    def get_str(self, key: str) -> Optional[str]:
        """Retrieve the value stored at key and decode it as a string."""
        return self.get(key, fn=lambda d: d.decode("utf-8"))

    def get_int(self, key: str) -> Optional[int]:
        """Retrieve the value stored at key and convert it to an int."""
        return self.get(key, fn=int)
