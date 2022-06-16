import { extendTheme } from '@chakra-ui/react';
import '../assets/css/fonts.css';
import '../assets/css/globals.css';

import Accordion from './components/Accordion';
import Badge from './components/Badge';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Colors from './colors';
import Heading from './components/Heading';
import Input from './components/Input';
import Menu from './components/Menu';
import Radio from './components/Radio';
import Select from './components/Select';
import Slider from './components/Slider';
import Spinner from './components/Spinner';
import Switch from './components/Switch';
import Text from './components/Text';
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
    Accordion,
    Badge,
    Button,
    Card,
    Checkbox,
    Heading,
    Input,
    Link,
    Menu,
    Radio,
    Select,
    Slider,
    Spinner,
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
