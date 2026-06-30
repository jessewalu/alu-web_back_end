# Unittests and Integration Tests

This project covers unit and integration testing in Python, using the
`unittest` framework along with `unittest.mock` and `parameterized`.

## Files

- `utils.py`: generic utility functions (`access_nested_map`, `get_json`,
  `memoize`).
- `client.py`: `GithubOrgClient`, a simple client to interact with the
  GitHub API.
- `fixtures.py`: fixtures used for integration testing of
  `GithubOrgClient`.
- `test_utils.py`: unit tests for `utils.py`.
- `test_client.py`: unit and integration tests for `client.py`.

## Requirements

- Python 3.7, Ubuntu 18.04 LTS
- pycodestyle 2.5
- All modules, classes, and functions are documented and type-annotated.

## Running the tests

```
python3 -m unittest discover
```
