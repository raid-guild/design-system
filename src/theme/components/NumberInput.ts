import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const NumberInput = {
  baseStyle: {},
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    filled: (props: StyleFunctionProps) => ({
      field: {
        borderRadius: '0px',
        bg: mode('blackAlpha.200', 'gray.700')(props),
        color: mode('black', 'white')(props),
        _focus: {
          bg: mode('blackAlpha.400', 'gray.700')(props),
        },
        _hover: {
          bg: mode('blackAlpha.300', 'gray.700')(props),
        },
      },
      stepperGroup: {},
      stepper: {},
    }),
    outline: {
      field: {
        border: '1px solid',
        borderImageSlice: 1,
        borderRadius: '0px',
        borderImageSource:
          'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
      },
    },
    solidOutline: {
      field: {
        border: '1px solid',
        backgroundColor: 'transparent',
        borderRadius: '0px',
        borderColor: 'primary.500',
      },
    },
    flushed: {
      field: {
        bg: 'none',
        borderBottom: '1px solid',
        borderImageSlice: 1,
        borderRadius: '0px',
        borderImageSource:
          'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
      },
    },
  },
};

export default NumberInput;
