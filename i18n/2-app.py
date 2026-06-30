#!/usr/bin/env python3
"""Module that selects the best matching locale from the request."""
from flask import Flask, render_template, request
from flask_babel import Babel


class Config:
    """Application configuration class for Flask and Babel settings."""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale() -> str:
    """Determine the best matching language from the request headers."""
    return request.accept_languages.best_match(app.config["LANGUAGES"])


@app.route("/", strict_slashes=False)
def index() -> str:
    """Render the index page of the application."""
    return render_template("2-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
