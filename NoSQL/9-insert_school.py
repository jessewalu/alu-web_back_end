#!/usr/bin/env python3
"""Module that inserts a new document into a MongoDB collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document built from kwargs into the given collection.

    Returns the new document's _id.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
