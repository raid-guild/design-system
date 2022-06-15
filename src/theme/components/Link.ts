const Link = {
  baseStyle: {},
  variants: {
    noDecoration: {
      _hover: {
        textDecoration: 'none',
      },
    },
    withDecoration: {
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
  defaultProps: {
    variant: 'noDecoration',
  },
};

export default Link;
