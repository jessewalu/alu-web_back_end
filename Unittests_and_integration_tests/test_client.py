#!/usr/bin/env python3
"""Unit and integration tests for the client module.
"""
import unittest
from unittest.mock import patch, PropertyMock, Mock
from parameterized import parameterized, parameterized_class

from client import GithubOrgClient
from fixtures import TEST_PAYLOAD


class TestGithubOrgClient(unittest.TestCase):
    """Tests for GithubOrgClient."""

    @parameterized.expand([
        ("google",),
        ("abc",),
    ])
    @patch("client.get_json")
    def test_org(self, org_name, mock_get_json):
        """Test that GithubOrgClient.org returns the correct value."""
        mock_get_json.return_value = {"login": org_name}
        client = GithubOrgClient(org_name)
        result = client.org
        mock_get_json.assert_called_once_with(
            GithubOrgClient.ORG_URL.format(org=org_name)
        )
        self.assertEqual(result, {"login": org_name})

    def test_public_repos_url(self):
        """Test that _public_repos_url uses the mocked org payload."""
        known_payload = {"repos_url": "https://api.github.com/orgs/x/repos"}
        with patch(
                "client.GithubOrgClient.org",
                new_callable=PropertyMock) as mock_org:
            mock_org.return_value = known_payload
            client = GithubOrgClient("x")
            self.assertEqual(
                client._public_repos_url, known_payload["repos_url"])

    @patch("client.get_json")
    def test_public_repos(self, mock_get_json):
        """Test that public_repos returns the expected list of repos."""
        test_payload = [
            {"name": "repo1", "license": {"key": "my_license"}},
            {"name": "repo2", "license": {"key": "other_license"}},
        ]
        mock_get_json.return_value = test_payload

        with patch(
                "client.GithubOrgClient._public_repos_url",
                new_callable=PropertyMock) as mock_url:
            mock_url.return_value = "https://api.github.com/orgs/x/repos"
            client = GithubOrgClient("x")
            result = client.public_repos()
            self.assertEqual(result, ["repo1", "repo2"])
            mock_url.assert_called_once()
            mock_get_json.assert_called_once()

    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False),
    ])
    def test_has_license(self, repo, license_key, expected):
        """Test that has_license correctly identifies a repo's license."""
        result = GithubOrgClient.has_license(repo, license_key)
        self.assertEqual(result, expected)


@parameterized_class(
    ("org_payload", "repos_payload", "expected_repos", "apache2_repos"),
    TEST_PAYLOAD,
)
class TestIntegrationGithubOrgClient(unittest.TestCase):
    """Integration tests for GithubOrgClient.public_repos."""

    @classmethod
    def setUpClass(cls):
        """Set up class fixtures by mocking requests.get."""
        route_payload = {
            "https://api.github.com/orgs/google": cls.org_payload,
            "https://api.github.com/orgs/google/repos": cls.repos_payload,
        }

        def get_payload(url):
            """Return a Mock response with the appropriate fixture."""
            if url in route_payload:
                return Mock(**{"json.return_value": route_payload[url]})
            return Mock(**{"json.return_value": None})

        cls.get_patcher = patch("requests.get", side_effect=get_payload)
        cls.mock_get = cls.get_patcher.start()

    @classmethod
    def tearDownClass(cls):
        """Stop the requests.get patcher."""
        cls.get_patcher.stop()

    def test_public_repos(self):
        """Test public_repos returns the expected repos list."""
        client = GithubOrgClient("google")
        self.assertEqual(client.public_repos(), self.expected_repos)

    def test_public_repos_with_license(self):
        """Test public_repos filtered by the apache-2.0 license."""
        client = GithubOrgClient("google")
        self.assertEqual(
            client.public_repos(license="apache-2.0"), self.apache2_repos
        )


if __name__ == "__main__":
    unittest.main()
