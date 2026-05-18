#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination.
"""

import csv
from typing import Dict, List


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
        self.__indexed_dataset = None

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

    def indexed_dataset(self) -> Dict[int, List]:
        """
        Create and cache an indexed dataset.

        Returns:
            A dictionary indexed by position.
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }

        return self.__indexed_dataset

    def get_hyper_index(
        self,
        index: int = None,
        page_size: int = 10
    ) -> Dict:
        """
        Return deletion-resilient pagination data.

        Args:
            index: Starting index.
            page_size: Number of items per page.

        Returns:
            A dictionary containing pagination metadata.
        """
        dataset = self.indexed_dataset()

        assert index is not None
        assert index >= 0
        assert index < len(dataset)

        data = []
        current_index = index

        while len(data) < page_size:
            if current_index in dataset:
                data.append(dataset[current_index])

            current_index += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": current_index
        }
