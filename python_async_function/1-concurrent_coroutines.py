#!/usr/bin/env python3
"""Module for executing concurrent coroutines."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute wait_random n times concurrently.

    Args:
        n: Number of coroutines.
        max_delay: Maximum delay value.

    Returns:
        List of delays in ascending order.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []

    for completed_task in asyncio.as_completed(tasks):
        result = await completed_task
        delays.append(result)

    return delays
