const css = require('rollup-plugin-css-porter');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    // workaround to fix 'preventAssignment' warning in build
    config.plugins = config.plugins.map(p =>
      p.name === 'replace'
        ? replace({
            'process.env.NODE_ENV': JSON.stringify(options.env),
            preventAssignment: true,
          })
        : p
    );

    config.plugins.push(css());

    return config;
  },
};
