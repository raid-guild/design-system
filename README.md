# Raid Guild Design System User Guide

## Usage

1. `npm -i @raidguild/design-system`
2. `import { RGThemeProvider } from @raidguild/design-system`
3. wrap  `<App />` in `<RGThemeProvider> </RGThemeProvider>`
3. in rest of app for instance use `import { Button } from @raidguild/design-system`

We recommend using the `RGThemeProvider` which automatically provides the Raid Guild theme as well. In case you prefer finer control over the styling, `ChakraProvider` and `theme` are also available via this package.