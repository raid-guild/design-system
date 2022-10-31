const Input = {
  baseStyle: {},
  variants: {
    filled: {
      field: {
        borderRadius: '0px',
        bg: 'gray.700',
        // opacity: '20%',
        color: 'white',
        _focus: {
          bg: 'gray.700',
        },
        _hover: {
          bg: 'gray.700',
        },
      },
    },
    outline: {
      field: {
        border: '1px solid',
        borderImageSlice: 1,
        borderRadius: '0px',
        borderImageSource:
          'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
      },
    },
    flushed: {
      field: {
        borderBottom: '1px solid',
        borderImageSlice: 1,
        borderRadius: '0px',
        borderImageSource:
          'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
      },
    },
  },
  defaultProps: {
    variant: 'filled',
  },
};

export default Input;
