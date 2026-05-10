#!/usr/bin/env python3
"""Module that provides a typed list summation function."""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list of floats."""
    return float(sum(input_list))
