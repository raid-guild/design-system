import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Fonts, Box, RGThemeProvider, defaultTheme, clientTheme } from '../src';
import { Decorator } from '@storybook/react';
import React from 'react';
import { StoryBookThemeContext } from '../src/stories/utils';

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
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['guild', 'client'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators: Decorator[] = [
  (Story, context) => {
    const theme = context.parameters.theme || context.globals.theme;
    const storyTheme = theme === 'guild' ? defaultTheme : clientTheme;
    return (
      <Box>
        <Fonts />
        <StoryBookThemeContext.Provider value={{ theme }}>
          <RGThemeProvider theme={storyTheme}>
            <Story />
          </RGThemeProvider>
        </StoryBookThemeContext.Provider>
      </Box>
    );
  },
];
