import { extendTheme, Theme } from '@chakra-ui/react';
import { colors } from './colors';
import { textStyles } from './texts';

export const theme: Theme = extendTheme({
  fonts: {
    texturina: `'Texturina', serif`,
    jetbrains: `'JetBrains Mono', monospace`,
    rubik: `'Rubik Mono One', sans-serif`,
    uncial: `'Uncial Antiqua', cursive`,
    spaceMono: `'Space Mono', monospace;`,
  },
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'black',
      },
    },
  },
  colors,
  textStyles,
});
