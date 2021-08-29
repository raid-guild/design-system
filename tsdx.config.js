const css = require('rollup-plugin-css-porter');

module.exports = {
  rollup(config, options) {
    config.plugins.push(css());
    return config;
  },
};
