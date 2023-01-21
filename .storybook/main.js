const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    // '../src/stories/index.stories.tsx',
    '../src/stories/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    'storybook-addon-react-docgen',
    '@chakra-ui/storybook-addon',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  features: {
    emotionAlias: false,
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
            options: {
              // Provide the path to your tsconfig.json so that your stories can
              // display types from outside each individual story.
              tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.(eot|otf|tff|woff|woff2)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, '../src'),
      }
    );

    // config.resolve.extensions.push('.eot', '.otf', '.tff', '.woff', '.woff2');
    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    // include ts files here so they can be resolved properly
    // config.resolve.modules.push(process.cwd() + '/node_modules');
    // config.resolve.modules.push(process.cwd() + '/src');

    // this is needed for working w/ linked folders
    config.resolve.symlinks = false;

    // return result
    return config;
  },
  core: {
    builder: 'webpack5',
    options: {
      lazyCompilation: true,
    },
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // docs: {
  //   autodocs: true,
  // },
};
