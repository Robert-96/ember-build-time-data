# Introduction

## What it is?

The `ember-build-time-data` addon allows you to insert JSON data into your application at build time.

It was build to help you insert JSON data that very rarely changes at build time instead of making a HTTP requests to the backend every time your Ember application is booting.

## How it works?

It convert all JSON files from your `/support` folder into ES6 Modules and make them available inside your Ember application.

For example `/support/data.json` will be importable from your Ember application with:

```js
import data from '../support/data';
```

## Alternatives

There are no Ember addons that solve this problem, but there two other alternatives:

  * Maintain you own in-repo addon.
  * Inline it into the `index.html` using [`ember-cli-inline-content`](https://github.com/gpoitch/ember-cli-inline-content) and load it into the store from there.

  Balint Erdi wrote a greate blog post about this: [Inlining store data in Ember.js](https://www.balinterdi.com/blog/inlining-store-data-in-ember-js/).