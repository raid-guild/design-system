import { extendTheme } from '@chakra-ui/react';
import 'assets/css/fonts.css';
import 'assets/css/globals.css';

import Button from './components/Button';
import Card from './components/Card/Card';
import Colors from './colors';
import Heading from './components/typography/Heading';
import Text from './components/typography/Text';

const theme = extendTheme({
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
  colors: Colors,
  fonts: {
    texturina: `'Texturina', serif`,
    jetbrains: `'JetBrains Mono', monospace`,
    rubik: `'Rubik Mono One', sans-serif`,
    uncial: `'Uncial Antiqua', cursive`,
    spaceMono: `'Space Mono', monospace;`,
  },
  components: {
    Button,
    Card,
    Text,
    Heading,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
