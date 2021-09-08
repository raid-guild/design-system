import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { ChakraProvider, RGTheme } from '../src';

// Option defaults.
const RaidGuildTheme = {
  ...RGTheme,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
};

export const Chakra = ({ children }) => (
  <ChakraProvider theme={RaidGuildTheme} resetCSS>
    {children}
  </ChakraProvider>
);

addDecorator((StoryFn) => (
  <Chakra>
    <StoryFn />
  </Chakra>
));

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
