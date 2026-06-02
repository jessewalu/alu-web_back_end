#!/usr/bin/env python3
"""
This module implements hypermedia pagination.
"""

import csv
import math
from typing import Dict, List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end indexes for pagination.

    Args:
        page: The current page number.
        page_size: Number of items per page.

    Returns:
        A tuple containing start and end indexes.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    return (start_index, end_index)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self) -> None:
        """
        Initialize the Server instance.
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cache and return the dataset.

        Returns:
            The cached dataset.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as file:
                reader = csv.reader(file)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(
        self,
        page: int = 1,
        page_size: int = 10
    ) -> List[List]:
        """
        Return a page of the dataset.

        Args:
            page: Current page number.
            page_size: Number of items per page.

        Returns:
            A list containing rows for the requested page.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start_index, end_index = index_range(page, page_size)

        dataset = self.dataset()

        if start_index >= len(dataset):
            return []

        return dataset[start_index:end_index]

    def get_hyper(
        self,
        page: int = 1,
        page_size: int = 10
    ) -> Dict:
        """
        Return pagination metadata.

        Args:
            page: Current page number.
            page_size: Number of items per page.

        Returns:
            A dictionary containing hypermedia pagination data.
        """
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
