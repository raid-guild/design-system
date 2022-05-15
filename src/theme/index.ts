import { extendTheme } from '@chakra-ui/react';
import '../assets/css/fonts.css';
import '../assets/css/globals.css';

import Button from './components/Button';
import Card from './components/Card/Card';
import Colors from './colors';
import Heading from './components/typography/Heading';
import Input from './components/Input';
import Slider from './components/Slider';
import Switch from './components/Switch';
import Text from './components/typography/Text';
import Textarea from './components/Textarea';
import Link from './components/Link';

const theme = extendTheme({
  styles: {
    global: {
      body: {
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
    Heading,
    Input,
    Link,
    Slider,
    Switch,
    Textarea,
    Text,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
