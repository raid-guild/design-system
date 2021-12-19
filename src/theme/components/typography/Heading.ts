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
      textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.20em red',
    },
    noShadow: {
      fontFamily: 'uncial',
      textShadow: 'none',
    },
    // headingOne: {
    //   fontFamily: 'uncial',
    //   letterSpacing: '1.2px',
    //   color: 'white',
    // },
    // headingTwo: {
    //   fontFamily: 'uncial',
    //   letterSpacing: '1.2px',
    //   textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.20em red',
    //   color: 'white',
    // },
    // headingThree: {
    //   fontFamily: 'uncial',
    //   letterSpacing: '1.2px',
    //   color: 'red',
    // },
    // labels: {
    //   fontFamily: 'texturina',
    //   letterSpacing: '2px',
    //   color: 'white',
    // },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'shadow',
  },
};

export default Heading;
