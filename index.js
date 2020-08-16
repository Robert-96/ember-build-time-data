'use strict';

const fs = require('fs');
const path = require('path');
const Funnel = require('broccoli-funnel');
const JsonModule = require('broccoli-json-module');
const { MergeTrees } = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  afterInstall() {
    const supportPath = path.join(this.app.project.root, 'support');

    if (!fs.existsSync(supportPath)) {
      fs.mkdirSync(supportPath);
    }
  },

  treeForApp() {
    const tree = this._super.treeForApp.apply(this, ...arguments);
    const supportPath = path.join(this.app.project.root, 'support');

    if (!fs.existsSync(supportPath)) {
      fs.mkdirSync(supportPath);
    }

    const supportTree = new Funnel(supportPath, {
      'destDir': 'support',
      'include': ['*.json'],
      'allowEmpty': true
    });

    return new MergeTrees(tree ? [tree, JsonModule(supportTree)] : [JsonModule(supportTree)])
  },
};
