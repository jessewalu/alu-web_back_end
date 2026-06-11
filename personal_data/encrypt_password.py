#!/usr/bin/env python3
"""
Module for password hashing and validation using bcrypt.
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """Return a salted, hashed version of the given password.

    Args:
        password: plain-text password string

    Returns:
        Hashed password as a byte string.
    """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """Validate that a plain-text password matches a hashed password.

    Args:
        hashed_password: bcrypt-hashed password bytes
        password: plain-text password string to check

    Returns:
        True if the password matches, False otherwise.
    """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
