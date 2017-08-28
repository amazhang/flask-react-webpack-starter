
# React + Flask starter kit

A quick starter repo that includes Flask, React, Webpack with Babel, sass loader / auto prefixer, and hot reload.

To set up, follow the below:
"venv" can be whatever you want your virtual env. name to be called.

```
pip install virtualenv
virtualenv venv; source venv/bin/activate
pip install -r requirements.txt
npm install -g webpack; npm install
```

In one terminal tab, run the app with: `python run.py`
I've tied webpack commands to `npm run build` (builds files) and `npm start` (watch + hot reload).
With both run.py and webpack running, localhost:5000 should have our simple app.


These steps are explained in more detail below.

## Prerequisites

You'll need some package managers.

- `npm`
- `pip`

## Setup

For the backend:

```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

For the frontend:

If you don't have webpack, install it:

```
npm install -g webpack
```

Then, use `npm` to install the remaining JavaScript dependencies.

```
npm install
```

## Development

The entry point for the app is in `js/app.js`. The starter React component is `js/Hello.js`. Editing this file is a good place to start.


## Running the app

If you're using a virtualenv, activate it.

```
source venv/bin/activate
```

Then run the Flask app:

```
python run.py
```
