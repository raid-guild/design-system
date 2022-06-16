const Card = {
  // The styles all Cards have in common
  baseStyle: ({ bg, color }: any) => ({
    alignItems: 'center',
    background: bg || 'black',
    color: color || bg || 'black',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    padding: 12,

    p: {
      color: 'white',
    },
  }),
  // Two variants: rounded and smooth
  variants: {
    fullBorder: {
      border: '2px solid',
      borderColor: 'red.500',
      borderRadius: 'none',
    },
    topBorderOnly: {
      borderTop: '2px solid',
      borderColor: 'red.500',
      borderRadius: 'none',
    },
    withHeader: {
      gap: 0,
      padding: 0,
      borderRadius: 'md',
      header: {
        position: 'relative',
        color: 'whiteAlpha.800',
        padding: 4,
        borderTopLeftRadius: 'md',
        borderTopRightRadius: 'md',
        width: '100%',
        backgroundImage:
          'linear-gradient(96.18deg, rgb(255, 56, 100) -44.29%, rgb(139, 29, 186) 53.18%, rgb(67, 83, 223) 150.65%)',
      },
      centerDivider: {
        position: 'absolute',
        bottom: -5,
        left: '45%',
        width: '50px',
        height: '50px',
      },
      body: {
        width: '100%',
        color: 'whiteAlpha.800',
        padding: 8,
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'fullBorder',
  },
};

export default Card;
