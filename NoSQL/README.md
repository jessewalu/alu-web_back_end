# NoSQL

This project covers the basics of NoSQL with MongoDB: what NoSQL means, how
it differs from SQL, how to use the MongoDB shell, and how to interact with
MongoDB programmatically using PyMongo.

## Learning Objectives

* What NoSQL means
* What is the difference between SQL and NoSQL
* What is ACID
* What is document storage
* What are NoSQL types
* What are benefits of a NoSQL database
* How to query, insert, update, and delete information from a NoSQL
  database
* How to use MongoDB

## Requirements

### MongoDB command files

* All files are interpreted/compiled on Ubuntu 18.04 LTS using MongoDB
  (version 4.2)
* All files end with a new line
* The first line of all files is a comment: `// my comment`

### Python scripts

* All files are interpreted/compiled on Ubuntu 18.04 LTS using `python3`
  (version 3.7) and PyMongo (version 3.10)
* All files end with a new line
* The first line of all files is exactly `#!/usr/bin/env python3`
* Code follows the `pycodestyle` style (version 2.5.*)
* All modules and functions are documented with real sentences explaining
  their purpose
* Code is not executed on import (guarded with
  `if __name__ == "__main__":`)

## Setup

Install MongoDB 4.2 on Ubuntu 18.04:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" > /etc/apt/sources.list.d/mongodb-org-4.2.list
apt-get update
apt-get install -y mongodb-org
pip3 install pymongo
```

In a "container-on-demand" (Ubuntu 18.04 - MongoDB), start MongoDB before
running any script:

```bash
service mongod start
```

## Files

| File | Description |
| --- | --- |
| `0-list_databases` | Lists all databases |
| `1-use_or_create_database` | Creates or uses the database `my_db` |
| `2-insert` | Inserts a document `{name: "ALX"}` into `school` |
| `3-all` | Lists all documents in `school` |
| `4-match` | Lists all documents with `name="ALX"` in `school` |
| `5-count` | Displays the number of documents in `school` |
| `6-update` | Adds an `address` attribute to documents with `name="ALX"` |
| `7-delete` | Deletes all documents with `name="ALX"` in `school` |
| `8-all.py` | `list_all(mongo_collection)`: lists all documents in a collection |
| `9-insert_school.py` | `insert_school(mongo_collection, **kwargs)`: inserts a document |
| `10-update_topics.py` | `update_topics(mongo_collection, name, topics)`: updates topics by school name |
| `11-schools_by_topic.py` | `schools_by_topic(mongo_collection, topic)`: finds schools by topic |
| `12-log_stats.py` | Displays stats about Nginx logs stored in `logs.nginx` |

## Usage

MongoDB shell scripts:

```bash
cat 0-list_databases | mongo
cat 2-insert | mongo my_db
```

Python scripts:

```bash
./12-log_stats.py
```
