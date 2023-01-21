const Text = {
  // Styles for the base style
  baseStyle: {
    fontFamily: 'texturina',
    lineHeight: '1.8',
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    main: {
      maxWidth: '720px',
      fontFamily: 'texturina',
      lineHeight: '1.8',
      color: ['black', 'white'],
      textAlign: 'left',
    },
    shadow: {
      textShadow: '1px 1px black',
    },
    mono: {
      fontFamily: 'spaceMono',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'main',
  },
};

export default Text;
