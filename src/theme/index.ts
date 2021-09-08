import { extendTheme, Theme } from '@chakra-ui/react';
import '../assets/css/fonts.css';
import '../assets/css/globals.css';
import { colors } from './colors';
import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { textStyles } from './texts';

const config = {
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'black',
        minHeight: '100vh',
        minWidth: '100vw',
      },
    },
  },
  colors,
  textStyles,
  fonts: {
    texturina: `'Texturina', serif`,
    jetbrains: `'JetBrains Mono', monospace`,
    rubik: `'Rubik Mono One', sans-serif`,
    uncial: `'Uncial Antiqua', cursive`,
    spaceMono: `'Space Mono', monospace;`,
  },
  components: {
    Button,
    Text,
    Heading,
  },
};

export const theme: Theme = extendTheme({ ...config });
