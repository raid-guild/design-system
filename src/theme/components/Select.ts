const Select = {
  baseStyle: {},
  variants: {
    filled: {
      field: {
        borderRadius: '0px',
        fontFamily: 'spaceMono',
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
    solidOutline: {
      field: {
        border: '1px solid',
        borderRadius: '0px',
        borderColor: 'primary.500',
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
};

export default Select;
