#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""
import csv
import math
from typing import Dict, List


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return a deletion-resilient hypermedia pagination dictionary.

        Args:
            index: the start index of the page (must be within valid range)
            page_size: number of items per page

        Returns:
            Dictionary with index, next_index, page_size, and data.
        """
        indexed = self.indexed_dataset()
        dataset_size = len(indexed)

        assert isinstance(index, int) and 0 <= index < dataset_size, \
            "index must be a valid integer within range"

        data = []
        current_index = index

        # Collect page_size items, skipping any deleted (missing) indexes
        while len(data) < page_size and current_index < dataset_size:
            if current_index in indexed:
                data.append(indexed[current_index])
            current_index += 1

        # next_index is the first index after our collected page
        next_index = current_index

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index,
        }
