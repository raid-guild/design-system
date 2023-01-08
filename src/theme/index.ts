import { extendTheme } from '../components/chakra';
import '../assets/css/fonts.css';
import '../assets/css/globals.css';

import colors from './colors';
import gradientStyles from './gradientStyles';

import Accordion from './components/Accordion';
import Badge from './components/Badge';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import RadioBox from './components/RadioBox';
import Heading from './components/Heading';
import Input from './components/Input';
import Link from './components/Link';
import Menu from './components/Menu';
import NumberInput from './components/NumberInput';
import Radio from './components/Radio';
import Select from './components/Select';
import Slider from './components/Slider';
import Spinner from './components/Spinner';
import Switch from './components/Switch';
import Text from './components/Text';
import Textarea from './components/Textarea';
import Tooltip from './components/Tooltip';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        minHeight: '100vh',
        minWidth: '100vw',
      },
    },
  },
  colors,
  fonts: {
    texturina: `'Texturina', serif`,
    jetbrains: `'JetBrains Mono', monospace`,
    rubik: `'Rubik Mono One', sans-serif`,
    uncial: `'Uncial Antiqua', serif`,
    spaceMono: `'Space Mono', monospace;`,
  },
  components: {
    Accordion,
    Badge,
    Button,
    Card,
    Checkbox,
    RadioBox,
    Heading,
    Input,
    Link,
    Menu,
    NumberInput,
    Radio,
    Select,
    Slider,
    Spinner,
    Switch,
    Textarea,
    Text,
    Tooltip,
  },
  layerStyles: {
    ...gradientStyles,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
