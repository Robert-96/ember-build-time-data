'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  description: '',

  normalizeEntityName() {
  },

  afterInstall() {
    const supportPath = path.join('.', 'support');

    if (!fs.existsSync(supportPath)) {
      fs.mkdirSync(supportPath);
    }
  }
};
