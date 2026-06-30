# 0x0B. Redis basic

This project covers the basics of using Redis as a simple cache/data store
from Python, including decorators to track method call counts and call
history.

## Learning Objectives

* Learn how to use Redis for basic operations
* Learn how to use Redis as a simple cache

## Requirements

* All files are interpreted/compiled on Ubuntu 18.04 LTS using `python3`
  (version 3.7)
* All files end with a new line
* The first line of all files is exactly `#!/usr/bin/env python3`
* Code follows the `pycodestyle` style (version 2.5)
* All modules, classes, and functions/methods are documented with real
  sentences explaining their purpose
* All functions and coroutines are type-annotated

## Setup

Install Redis on Ubuntu 18.04:

```bash
sudo apt-get -y install redis-server
pip3 install redis
sed -i "s/bind .*/bind 127.0.0.1/g" /etc/redis/redis.conf
```

If running inside a container, the Redis server is stopped by default, so
start it manually before running any script:

```bash
service redis-server start
```

## Files

| File | Description |
| --- | --- |
| `exercise.py` | Defines the `Cache` class, the `count_calls`, `call_history` decorators, and the `replay` function |

### `Cache` class

* `__init__`: stores a private Redis client instance (`self._redis`) and
  flushes the database.
* `store(data)`: stores `data` (a `str`, `bytes`, `int`, or `float`) under a
  randomly generated UUID key and returns that key.
* `get(key, fn=None)`: retrieves the value at `key`, optionally converting
  it back to its original type using the callable `fn`.
* `get_str(key)`: retrieves the value at `key` as a UTF-8 decoded string.
* `get_int(key)`: retrieves the value at `key` as an integer.

### Decorators

* `count_calls`: counts how many times a method is called, using a Redis
  counter keyed by the method's qualified name.
* `call_history`: stores the history of inputs and outputs for a method in
  two Redis lists (`<qualname>:inputs` and `<qualname>:outputs`).

### `replay`

Displays the call history of a particular method, showing how many times
it was called and each individual call's inputs and corresponding output.

## Usage

```bash
python3 -c "
Cache = __import__('exercise').Cache
cache = Cache()
key = cache.store('hello')
print(cache.get_str(key))
"
```
