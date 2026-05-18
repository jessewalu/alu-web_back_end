#!/usr/bin/env python3
"""Module for basic asynchronous coroutine execution."""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Wait for a random delay between 0 and max_delay seconds.

    Args:
        max_delay: Maximum delay value.

    Returns:
        A random float delay value.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
