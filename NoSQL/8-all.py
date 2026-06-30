#!/usr/bin/env python3
"""Module that lists all documents in a MongoDB collection."""


def list_all(mongo_collection):
    """Return a list of all documents in the given collection.

    Returns an empty list if the collection has no documents.
    """
    return list(mongo_collection.find())
