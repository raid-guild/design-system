# Raid Guild Design System User Guide

## Usage

1. `npm -i @raidguild/design-system`
2. `import { RGThemeProvider } from @raidguild/design-system`
3. wrap `<App />` in `<RGThemeProvider> </RGThemeProvider>`
4. in rest of app for instance use `import { Button } from @raidguild/design-system`

We recommend using the `RGThemeProvider` which automatically provides the Raid Guild theme as well. In case you prefer finer control over the styling, `ChakraProvider` and `theme` are also available via this package.

# Contributing to the Raid Guild Design System

## Running the Storybook to see components and theme in the browser

1. fork and clone the repo
2. `yarn install`
3. `yarn build-storybook`
4. `yarn storybook`

On http://localhost:6006/ you'll see the components built in the [storybook]('https://storybook.js.org/').
