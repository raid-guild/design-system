import { cssVar } from '@chakra-ui/theme-tools';

const $arrowBg = cssVar('popper-arrow-bg');

const Tooltip = {
  baseStyle: {},
  variants: {
    default: {
      background: 'gray.200',
      [$arrowBg.variable]: 'gray.200',
      color: 'gray.800',
    },
    rainbow: {
      background:
        'linear-gradient(94.89deg, #FF5A00 0%, #D62789 70.2%, #AD17AD 100%)',
      [$arrowBg.variable]:
        'linear-gradient(94.89deg, #FF5A00 0%, #D62789 70.2%, #AD17AD 100%)',
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Tooltip;
