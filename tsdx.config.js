/* eslint-disable @typescript-eslint/no-var-requires */
const css = require('rollup-plugin-css-porter');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    // grab the original plugins
    const plugins = config.plugins || [];
    // workaround to fix 'preventAssignment' warning in build
    plugins.replace = replace({
      'process.env.NODE_ENV': JSON.stringify(options.env),
      preventAssignment: true,
    });
    // export css
    plugins.push(css());

    return { ...config, plugins };
  },
};
