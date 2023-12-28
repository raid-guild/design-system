const Textarea = {
  baseStyle: {
    fontFamily: 'spaceMono',
  },
  variants: {
    filled: {
      borderRadius: '0px',
      bg: ['gray.700', 'gray.700'],
      _focus: {
        bg: ['gray.700', 'gray.700'],
      },
      _hover: {
        bg: ['gray.700', 'gray.700'],
      },
    },
    outline: {
      border: '1px solid',
      borderImageSlice: 1,
      borderImageSource:
        'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
      borderRadius: '0px',
    },
    solidOutline: {
      border: '1px solid',
      backgroundColor: 'transparent',
      borderRadius: '0px',
      borderColor: 'primary.500',
    },
    flushed: {
      borderBottom: '1px solid',
      borderImageSlice: 1,
      borderRadius: '0px',
      borderImageSource:
        'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
    },
  },
  defaultProps: {
    variant: 'outline',
  },
};

export default Textarea;
