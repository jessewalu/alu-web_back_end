# MySQL_Advanced

Advanced MySQL concepts: table constraints, enumerations, triggers, stored
procedures, functions, views, and indexes.

## Learning Objectives

* How to create tables with constraints
* How to optimize queries by adding indexes
* What is and how to implement a stored procedure or function in MySQL
* What is and how to implement a view in MySQL
* What is and how to implement a trigger in MySQL

## Requirements

* All files are executed on Ubuntu 18.04 LTS using MySQL 5.7 (version
  5.7.30)
* All files end with a new line
* All SQL queries have a comment just before them, explaining what they do
* All files start with a comment describing the task
* All SQL keywords are in uppercase (`SELECT`, `WHERE`, etc.)

## Setup

In a "container-on-demand" (Ubuntu 18.04 - Python 3.7), start MySQL before
running any script:

```bash
service mysql start
```

Credentials in the container are `root`/`root`.

## Files

| File | Description |
| --- | --- |
| `0-uniq_users.sql` | Creates a `users` table with a unique `email` |
| `1-country_users.sql` | Creates a `users` table with a `country` enum |
| `2-fans.sql` | Ranks band origins by total number of fans |
| `3-glam_rock.sql` | Lists Glam rock bands ranked by longevity |
| `4-store.sql` | Trigger that decreases item quantity after an order |
| `5-valid_email.sql` | Trigger that resets `valid_email` on email change |
| `6-bonus.sql` | Stored procedure `AddBonus` to add a correction |
| `7-average_score.sql` | Stored procedure `ComputeAverageScoreForUser` |
| `8-index_my_names.sql` | Index on the first letter of `name` |
| `9-index_name_score.sql` | Index on the first letter of `name` and `score` |
| `10-div.sql` | Function `SafeDiv` that divides safely (no division by 0) |
| `11-need_meeting.sql` | View `need_meeting` listing students who need one |

## Usage

```bash
cat 0-uniq_users.sql | mysql -uroot -p holberton
```

Tasks 2 and 3 require importing the `metal_bands.sql` dump first; tasks 8
and 9 require importing the `names.sql` dump first.
