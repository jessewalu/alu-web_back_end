#!/usr/bin/env python3
"""Fixtures for GithubOrgClient tests.
"""
org_payload = {"repos_url": "https://api.github.com/orgs/google/repos"}

repos_payload = [
    {
        "id": 7697149,
        "name": "episodes.dart",
        "full_name": "google/episodes.dart",
        "private": False,
        "fork": False,
        "license": {
            "key": "bsd-3-clause",
            "name": "BSD 3-Clause \"New\" or \"Revised\" License",
        },
    },
    {
        "id": 7776515,
        "name": "cpp-netlib",
        "full_name": "google/cpp-netlib",
        "private": False,
        "fork": True,
        "license": {
            "key": "bsl-1.0",
            "name": "Boost Software License 1.0",
        },
    },
    {
        "id": 7968417,
        "name": "dagger",
        "full_name": "google/dagger",
        "private": False,
        "fork": True,
        "license": {
            "key": "apache-2.0",
            "name": "Apache License 2.0",
        },
    },
    {
        "id": 8165161,
        "name": "ios-webkit-debug-proxy",
        "full_name": "google/ios-webkit-debug-proxy",
        "private": False,
        "fork": False,
        "license": {
            "key": "other",
            "name": "Other",
        },
    },
    {
        "id": 8459994,
        "name": "google.github.io",
        "full_name": "google/google.github.io",
        "private": False,
        "fork": False,
        "license": None,
    },
    {
        "id": 8566972,
        "name": "kratu",
        "full_name": "google/kratu",
        "private": False,
        "fork": False,
        "license": {
            "key": "apache-2.0",
            "name": "Apache License 2.0",
        },
    },
    {
        "id": 8858648,
        "name": "build-debian-cloud",
        "full_name": "google/build-debian-cloud",
        "private": False,
        "fork": True,
        "license": {
            "key": "other",
            "name": "Other",
        },
    },
    {
        "id": 9060347,
        "name": "traceur-compiler",
        "full_name": "google/traceur-compiler",
        "private": False,
        "fork": False,
        "license": {
            "key": "apache-2.0",
            "name": "Apache License 2.0",
        },
    },
    {
        "id": 9065917,
        "name": "firmata.py",
        "full_name": "google/firmata.py",
        "private": False,
        "fork": False,
        "license": {
            "key": "apache-2.0",
            "name": "Apache License 2.0",
        },
    },
]

expected_repos = [
    "episodes.dart",
    "cpp-netlib",
    "dagger",
    "ios-webkit-debug-proxy",
    "google.github.io",
    "kratu",
    "build-debian-cloud",
    "traceur-compiler",
    "firmata.py",
]

apache2_repos = [
    "dagger",
    "kratu",
    "traceur-compiler",
    "firmata.py",
]

TEST_PAYLOAD = [
    (org_payload, repos_payload, expected_repos, apache2_repos),
]
