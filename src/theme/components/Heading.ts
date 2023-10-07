const Heading = {
  // Styles for the base style
  baseStyle: {
    fontFamily: 'uncial',
    letterSpacing: '1.2px',
    _hover: {
      textDecoration: 'none',
    },
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    shadow: {
      fontFamily: 'uncial',
      // TODO handle better shadow on light mode. wasn't working with array method here
      textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.20em red',
    },
    noShadow: {
      fontFamily: 'uncial',
      textShadow: 'none',
    },
    labels: {
      fontFamily: 'texturina',
      letterSpacing: '2px',
      color: 'white',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'noShadow',
  },
};

export default Heading;
