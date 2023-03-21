import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    // '../src/stories/index.stories.tsx',
    '../src/stories/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { docs: false } },
    '@storybook/addon-docs',
    // '@chakra-ui/storybook-addon',
  ],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        lazyCompilation: true,
      },
    },
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  framework: '@storybook/react-webpack5',
  features: {
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
};

export default config;
