---
id: pIbhgIUxeq6954gu7KAuV
title: Cheat Sheet
desc: 'My Python Cheat Sheet'
updated: 1644616714883
created: 1644599198598
---

[![python-logo](/assets/images/python-logo.png)](https://www.python.org/)

# Table of Contents

- [Abbreviations](#abbreviations)
- [Setup a Virtual Environment](#setup-virtual-environment)
- [Recreate a Virtual Environment](#recreate-virtual-environment)
- [Run Python Programs](#run-python-programs)
- [Run Tests](#run-tests)
- [Run Flask Apps](#run-flask-apps)
- [Generate Secret Key](#generate-a-secret-key)

## Abbreviations

- \*[cli]: Command Line Interface

## Setup Virtual Environment

```bash
cd <project-folder>
python3 -m venv <venv_name>
source venv_name/bin/activate # macos and linux only
pip3 freeze # list of installed Packages
pip3 freeze > requirements.txt # save list of installed packaged to requirements.txt
deactivate # deactivates virtual environment
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Recreate Virtual Environment

```bash
git clone <url>
cd <project -folder>
python3 -m venv <venv_name>
source venv_name/bin/activate # macos and linux only
pip3 install -r requirements.txt
deactivate # deactivates virtual environment
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Run Python Programs

- cli: `python3 <file.py>`
- iPython: `% run <file.py>`

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Run tests

- doctests: `python3 -m doctest -v <file.test.py>`
- unittests: `python3 -m unittest`

[[python.testing]] for more options on testing

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Run Flask Apps

```bash
flask run
```

### Basic Flask App Template

```python
from flask import Flask, request

app = Flask(__name__)

app.config['SECRET_KEY'] = 'some secret key'

@app.route('/')
def home():
  return 'This is the home page.'
```

- flask.request allows the app to handle GET & POST requests
- `app = Flask(__name__)` is required, Flask needs to know what module is scan for routes
  - app is the name of the actual main python file. (i.e. app.py)

> **NOTE:**
>
> for app building you should make sure your flask environment is running in **development** mode. This will allow for debugging.
>
> `export FLASK_ENV=development`

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Generate a Secret Key

```bash
os.urandom(<int>).hex()
```

or

```bash
os.urandom(<int>)
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
