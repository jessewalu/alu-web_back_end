#!/usr/bin/env python3
"""
Module for filtering and logging personal data securely.
"""
import logging
import os
import re
from typing import List

import mysql.connector


# PII fields from user_data.csv that must be hidden in logs
PII_FIELDS = ("name", "email", "phone", "ssn", "password")


def filter_datum(fields: List[str], redaction: str,
                 message: str, separator: str) -> str:
    """Return the log message with specified fields obfuscated."""
    return re.sub(
        r'(' + '|'.join(fields) + r')=[^' + separator + r']*',
        lambda m: m.group(0).split('=')[0] + '=' + redaction,
        message
    )


class RedactingFormatter(logging.Formatter):
    """Redacting Formatter class."""

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """Filter PII fields from log record before formatting."""
        record.msg = filter_datum(self.fields, self.REDACTION,
                                  record.getMessage(), self.SEPARATOR)
        record.args = None
        return super().format(record)


def get_logger() -> logging.Logger:
    """Return a Logger named 'user_data' configured to redact PII fields."""
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False

    handler = logging.StreamHandler()
    handler.setFormatter(RedactingFormatter(fields=PII_FIELDS))
    logger.addHandler(handler)

    return logger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """Return a MySQL database connector using credentials from environment."""
    return mysql.connector.connect(
        host=os.getenv("PERSONAL_DATA_DB_HOST", "localhost"),
        user=os.getenv("PERSONAL_DATA_DB_USERNAME", "root"),
        password=os.getenv("PERSONAL_DATA_DB_PASSWORD", ""),
        database=os.getenv("PERSONAL_DATA_DB_NAME")
    )


def main() -> None:
    """Fetch all users from DB and log each row with PII fields redacted."""
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "SELECT name, email, phone, ssn, password, ip, last_login, "
        "user_agent FROM users;"
    )
    columns = [col[0] for col in cursor.description]
    logger = get_logger()

    for row in cursor:
        message = "; ".join(
            f"{col}={val}" for col, val in zip(columns, row)
        ) + ";"
        logger.info(message)

    cursor.close()
    db.close()


if __name__ == '__main__':
    main()
