#!/usr/bin/env python3
"""Module that provides a typed iterable length function."""

from typing import Iterable, List, Sequence, Tuple


def element_length(
    lst: Iterable[Sequence]
) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples containing elements and their lengths."""
    return [(i, len(i)) for i in lst]
