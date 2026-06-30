#!/usr/bin/env python3
"""Module that retrieves schools by a given topic."""


def schools_by_topic(mongo_collection, topic):
    """Return the list of schools that have the given topic.

    mongo_collection is the pymongo collection object and topic is
    the string topic being searched for.
    """
    return list(mongo_collection.find({"topics": topic}))
