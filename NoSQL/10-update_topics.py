#!/usr/bin/env python3
"""Module that updates a school document's topics by name."""


def update_topics(mongo_collection, name, topics):
    """Change all topics of a school document based on its name.

    Updates every document matching the given name, setting its
    topics attribute to the provided list.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
