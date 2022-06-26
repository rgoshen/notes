# Python

[![python-logo](../../../assets/images/python-logo.png)](https://www.python.org/)

[![Python](https://img.shields.io/badge/Docs-python-3670A0?style=flat&logo=python&logoColor=ffdd54)](https://docs.python.org/3/) |
[Pip Docs](https://pip.pypa.io/en/stable/) |
[![Python](https://img.shields.io/badge/pypi-3775A9?style=flat&logo=pypi&logoColor=ffdd54)](https://pypi.org/) |
[Python Version Manager](https://github.com/pyenv/pyenv)

## Table of Contents

- [Cheat Sheet](../../../cheatsheets/python.cheat-sheet.md)
- [Misc](#misc)
- [Packages](#packages)
- [Testing](../../../testing/python/python.testing.md)

## Misc

### Create a virtual environment

```bash
python -m venv venv    # create
source venv/bin/activate    # linux/macos
source venv/scripts/activate    # windows
pip freeze > requirements.txt    # create
pip install -r requirements.txt # install
deactivate    # stop
```

if you do not want to use venv you can do this:

```bash
python -m venv /path/to_folder/<env_name>
source /path/to_folder/<env_name>/bin[source]/activate
```

### Setup [pyenv](https://github.com/pyenv/pyenv) for a project

- Steps to install [pyenv](https://github.com/pyenv/pyenv)
- [commands](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md)

```bash
pyenv install --list    # see which are available
pyenv install <version>
pyenv global <version>    # to change the global version
cd <project-folder>
pyenv local <python-version>    # change the local version
python --version    # check version
python -m venv <env-name>
source venv/bin/activate    # for macos and Linux
source venv\scripts\activate    # for windows
venv\scripts\activate        # for powersehll
```

## Packages

- API Requests - `pip install requests`
- BCrypt - `pip install bcrypt`
- Bootstrap Flask - `pip install bootstrap-flask`
- Flask = `pip install flask`
- Flask BCrypt - `pip install flask_bcrypt`
- Flask Debug Toolbar = `pip install flask-debugtoolbar`
  - then `flask.debugtoolbar import DebugToolbarExtensions`
- Flask SQLAlchemy - `pip install flask-sqlalchemy`
- Flask WTForms = `pip install flask-wtf`
  - then `from flask_wtf import FlaskForm`
  - also `from wtforms.validators import [validator]`
- Gunicorn - `pip install gunicorn`
- Interactive Python - `pip install ipython`
- Jinja2[^1] - `pip install jinja2`
- SQLAlchemy - `pip install psycopg2-binary`

[^1]: normally installs when flask is installed
