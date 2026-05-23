#!/usr/bin/env python3

def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
    """
    Return the appropriate page of the dataset.

    Args:
        page: The page number.
        page_size: Number of items per page.

    Returns:
        A list of rows corresponding to the requested page.
    """
    assert isinstance(page, int) and page > 0
    assert isinstance(page_size, int) and page_size > 0

    start_index, end_index = index_range(page, page_size)

    dataset = self.dataset()

    if start_index >= len(dataset):
        return []

    return dataset[start_index:end_index]
