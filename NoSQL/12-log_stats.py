#!/usr/bin/env python3
"""Module that provides stats about Nginx logs stored in MongoDB."""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    total_logs = nginx_collection.count()
    print("{} logs".format(total_logs))

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.find({"method": method}).count()
        print("\tmethod {}: {}".format(method, count))

    status_check = nginx_collection.find(
        {"method": "GET", "path": "/status"}
    ).count()
    print("{} status check".format(status_check))
