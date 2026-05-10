#!/usr/bin/env python3
"""Module that provides a typed multiplier factory."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier."""

    def multiplier_func(n: float) -> float:
        """Multiply a float by the outer multiplier."""
        return n * multiplier

    return multiplier_func