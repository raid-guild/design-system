/* eslint-disable @typescript-eslint/no-var-requires */
const css = require('rollup-plugin-css-porter');
const replace = require('@rollup/plugin-replace');
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, options) {
    // grab the original plugins
    let plugins = config.plugins || [];
    // workaround to fix 'preventAssignment' warning in build
    plugins.replace = replace({
      'process.env.NODE_ENV': JSON.stringify(options.env),
      preventAssignment: true,
    });
    // manually include fonts
    plugins = [
      url({
        include: [
          'assets/fonts/**',
          // '**/*.eot',
          // '**/*.otf',
          // '**/*.woff',
          // '**/*.woff2',
        ],
        limit: Infinity,
      }),
      ...plugins,
    ];
    // export css
    plugins.push(css());

    return { ...config, plugins };
  },
};
