#!/usr/bin/env python3
"""Module for measuring coroutine execution runtime."""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure average execution time for wait_n.

    Args:
        n: Number of coroutines.
        max_delay: Maximum delay value.

    Returns:
        Average execution time per coroutine.
    """
    start_time = time.time()

    asyncio.run(wait_n(n, max_delay))

    end_time = time.time()

    total_time = end_time - start_time

    return total_time / n
