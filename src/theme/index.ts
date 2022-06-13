import { extendTheme } from '@chakra-ui/react';
import '../assets/css/fonts.css';
import '../assets/css/globals.css';

import Badge from './components/Badge';
import Button from './components/Button';
import Card from './components/Card/Card';
import Checkbox from './components/Checkbox';
import Colors from './colors';
import Heading from './components/typography/Heading';
import Input from './components/Input';
import Radio from './components/Radio';
import Select from './components/Select';
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
    Badge,
    Button,
    Card,
    Checkbox,
    Heading,
    Input,
    Link,
    Radio,
    Select,
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
