#!/usr/bin/env python3
"""Unit tests for the utils module.
"""
import unittest
from unittest.mock import patch, Mock
from parameterized import parameterized

from utils import access_nested_map, get_json, memoize


class TestAccessNestedMap(unittest.TestCase):
    """Tests for utils.access_nested_map."""

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """Test that access_nested_map returns the expected result."""
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",), "a"),
        ({"a": 1}, ("a", "b"), "b"),
    ])
    def test_access_nested_map_exception(self, nested_map, path, key):
        """Test that access_nested_map raises KeyError as expected."""
        with self.assertRaises(KeyError) as context:
            access_nested_map(nested_map, path)
        self.assertEqual(str(context.exception), repr(key))


class TestGetJson(unittest.TestCase):
    """Tests for utils.get_json."""

    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False}),
    ])
    @patch("utils.requests.get")
    def test_get_json(self, test_url, test_payload, mock_get):
        """Test that get_json returns the expected result."""
        mock_get.return_value = Mock(json=lambda: test_payload)
        result = get_json(test_url)
        mock_get.assert_called_once_with(test_url)
        self.assertEqual(result, test_payload)


class TestMemoize(unittest.TestCase):
    """Tests for the utils.memoize decorator."""

    def test_memoize(self):
        """Test that a memoized property is only computed once."""
        class TestClass:
            """A simple class used to test memoize."""

            def a_method(self):
                """Return a constant value."""
                return 42

            @memoize
            def a_property(self):
                """A memoized property based on a_method."""
                return self.a_method()

        with patch.object(
                TestClass, "a_method", return_value=42) as mock_method:
            test_object = TestClass()
            self.assertEqual(test_object.a_property, 42)
            self.assertEqual(test_object.a_property, 42)
            mock_method.assert_called_once()


if __name__ == "__main__":
    unittest.main()
