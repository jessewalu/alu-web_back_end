#!/usr/bin/env python3
"""Module that infers the appropriate timezone for the current request."""
from typing import Dict, Union

import pytz
from flask import Flask, g, render_template, request
from flask_babel import Babel


class Config:
    """Application configuration class for Flask and Babel settings."""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


def get_user() -> Union[Dict, None]:
    """Return the user dictionary matching the 'login_as' URL parameter.

    Returns None if the parameter is not present or the ID is not found
    in the mock users table.
    """
    user_id = request.args.get("login_as")
    if user_id is None:
        return None
    try:
        user_id = int(user_id)
    except ValueError:
        return None
    return users.get(user_id)


@app.before_request
def before_request() -> None:
    """Find a user, if any, and set it as a global on flask.g.user."""
    g.user = get_user()


@babel.localeselector
def get_locale() -> str:
    """Determine the best matching locale for the current request.

    The locale is selected following this order of priority: locale from
    URL parameters, locale from user settings, locale from the request
    header, then the default locale.
    """
    locale = request.args.get("locale")
    if locale and locale in app.config["LANGUAGES"]:
        return locale
    if g.user and g.user.get("locale") in app.config["LANGUAGES"]:
        return g.user["locale"]
    header_locale = request.headers.get("locale")
    if header_locale and header_locale in app.config["LANGUAGES"]:
        return header_locale
    return request.accept_languages.best_match(app.config["LANGUAGES"])


@babel.timezoneselector
def get_timezone() -> str:
    """Determine the appropriate timezone for the current request.

    The timezone is selected following this order of priority: timezone
    from URL parameters, timezone from user settings, then the default
    timezone. Invalid timezones are ignored in favor of the next option.
    """
    timezone = request.args.get("timezone")
    if not timezone and g.user:
        timezone = g.user.get("timezone")
    if timezone:
        try:
            pytz.timezone(timezone)
            return timezone
        except pytz.exceptions.UnknownTimeZoneError:
            pass
    return app.config["BABEL_DEFAULT_TIMEZONE"]


@app.route("/", strict_slashes=False)
def index() -> str:
    """Render the index page of the application."""
    return render_template("7-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
