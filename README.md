# ember-build-time-data

[![npm version](https://badge.fury.io/js/ember-build-time-data.svg)](https://www.npmjs.com/package/ember-build-time-data)
[![Build Status](https://travis-ci.org/Robert-96/ember-build-time-data.svg?branch=master)](https://travis-ci.org/Robert-96/ember-build-time-data)

An Ember addon to help you insert JSON data into your application at build time.

## Installation

```
ember install ember-build-time-data
```

## Compatibility

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Documentation

See the [documentation](https://robert-96.github.io/ember-build-time-data/).

## Usage

### Add a JSON file

Create a `data.json` file inside the `/support` folder:

```json
{
    "data": {
        "id": 1,
        "name": "EMERALD",
        "color": "#2ecc71"
    }
}
```

### Import the JSON file

In order you get the data in your components or route you only need to import it:

```js
import data from '../support/data';
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
