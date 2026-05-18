#!/usr/bin/env python3
"""Module for measuring async comprehension runtime."""

import time
import asyncio

async_comprehension = __import__(
    '1-async_comprehension'
).async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension four times concurrently.

    Returns:
        Total runtime for the concurrent executions.
    """
    start_time = time.time()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.time()

    return end_time - start_time
