'use strict';
const fs = require('fs');

module.exports = {
  description: '',

  normalizeEntityName() {
  },

  afterInstall() {
    const supportPath = path.join(this.app.project.root, 'support');

    if (!fs.existsSync(supportPath)) {
      fs.mkdirSync(supportPath);
    }
  }
};
