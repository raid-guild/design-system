const blackCard = {
  background: 'black',
  color: 'white',
};

const rainbowBorder = {
  borderImageSlice: 1,
  borderImageSource:
    'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
};

const rainbowHeader = {
  backgroundImage:
    'linear-gradient(96.18deg, rgb(255, 56, 100) -44.29%, rgb(139, 29, 186) 53.18%, rgb(67, 83, 223) 150.65%)',
};

const Card = {
  // The styles all Cards have in common
  baseStyle: {
    container: {},
    body: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
    },
  },
  // Two variants: rounded and smooth
  variants: {
    fullBorder: {
      container: {
        ...blackCard,
        border: '2px solid',
        borderColor: 'red.500',
        borderRadius: 'none',
      },
    },
    topBorderOnly: {
      container: {
        ...blackCard,
        borderTop: '2px solid',
        borderColor: 'red.500',
        borderRadius: 'none',
      },
    },
    rainbowBorder: {
      container: {
        ...blackCard,
        border: '2px solid',
        borderRadius: 'none',
        ...rainbowBorder,
      },
    },
    topRainbowBorder: {
      container: {
        ...blackCard,
        borderTop: '2px solid',
        borderRadius: 'none',
        ...rainbowBorder,
      },
    },
    withHeader: {
      container: {
        gap: 0,
        padding: 0,
        borderRadius: 'md',
        background: 'gray.800',
      },
      header: {
        position: 'relative',
        color: 'whiteAlpha.800',
        padding: 4,
        borderTopLeftRadius: 'md',
        borderTopRightRadius: 'md',
        width: '100%',
        ...rainbowHeader,
      },
      centerDivider: {
        position: 'absolute',
        bottom: -5,
        left: '45%',
        width: '50px',
        height: '50px',
      },
      body: {
        background: 'gray.800',
        width: '100%',
        color: 'whiteAlpha.800',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottomRightRadius: 'md',
        borderBottomLeftRadius: 'md',
      },
    },
    filled: {
      body: {
        background: 'gray.800',
        borderRadius: '15',
        color: 'whiteAlpha.800',
      },
      container: {
        background: 'gray.800',
        borderRadius: '15',
      },
    },
    outline: {
      body: {
        background: 'gray.800',
        border: '1px solid',
        borderColor: 'whiteAlpha.500',
        borderRadius: '15',
        color: 'whiteAlpha.800',
      },
      container: {
        background: 'gray.800',
        borderRadius: '15',
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'fullBorder',
  },
};

export default Card;
