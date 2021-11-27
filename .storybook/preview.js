import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { addDecorator } from '@storybook/react';
import React from 'react';
import { RGTheme, RGThemeProvider } from '../src';

// Option defaults.
const RaidGuildTheme = {
  ...RGTheme,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
};

export const Chakra = ({ children }) => (
  <RGThemeProvider>{children}</RGThemeProvider>
);

// addDecorator((StoryFn) => (
//   <Chakra>
//     <StoryFn />
//   </Chakra>
// ));

export const decorators = [
  (Story) => (
    <>
      <Chakra>
        <Story />
      </Chakra>
    </>
  ),
];

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
