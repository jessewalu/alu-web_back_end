#!/usr/bin/env python3
"""Module for executing multiple asyncio tasks."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute multiple asyncio tasks concurrently.

    Args:
        n: Number of tasks.
        max_delay: Maximum delay value.

    Returns:
        List of delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    delays = []

    for completed_task in asyncio.as_completed(tasks):
        result = await completed_task
        delays.append(result)

    return delays
