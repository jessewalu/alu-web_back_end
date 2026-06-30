# 0x0E. i18n

This project covers internationalization (i18n) and localization (l10n) of a
Flask web application using the `flask_babel` extension.

## Learning Objectives

* Parametrize Flask templates to display different languages
* Infer the correct locale based on URL parameters, user settings, or
  request headers
* Localize timestamps

## Requirements

* All files are interpreted/compiled on Ubuntu 18.04 LTS using `python3`
  (version 3.7)
* All files end with a new line
* The first line of all files is exactly `#!/usr/bin/env python3`
* Code follows the `pycodestyle` style (version 2.5)
* All modules, classes, and functions/methods are documented with real
  sentences explaining their purpose
* All functions and coroutines are type-annotated

## Setup

```bash
pip3 install flask_babel
```

## Files

| File | Description |
| --- | --- |
| `0-app.py` | Basic Flask app with a single `/` route |
| `1-app.py` | Basic Babel setup with a `Config` class |
| `2-app.py` | Locale selection from the request's `Accept-Language` header |
| `3-app.py` | Template parametrization using `_`/`gettext` and translation files |
| `4-app.py` | Force a locale using the `locale` URL parameter |
| `5-app.py` | Mock user login system using the `login_as` URL parameter |
| `6-app.py` | Use the logged-in user's preferred locale |
| `7-app.py` | Infer the appropriate timezone for the user |

## Usage

Each app can be run directly, e.g.:

```bash
python3 7-app.py
```

Then visit `http://127.0.0.1:5000/` in your browser. You can force a locale
or timezone, and mock a login, with URL parameters:

```
http://127.0.0.1:5000/?login_as=2&locale=fr&timezone=Europe/Paris
```
