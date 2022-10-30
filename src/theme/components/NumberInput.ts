const NumberInput = {
  baseStyle: {},
  defaultProps: {
    // variant: 'filled',
  },
  variants: {
    filled: {
      field: {
        borderRadius: '0px',
      },
      stepperGroup: {},
      stepper: {},
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
