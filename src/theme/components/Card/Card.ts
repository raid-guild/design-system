const Card = {
  // The styles all Cards have in common
  baseStyle: {
    alignItems: 'center',
    background: 'black',
    border: '2px solid',
    borderColor: 'red',
    borderRadius: 'none',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    padding: 12,

    p: {
      color: 'white',
    },
  },
  // Two variants: rounded and smooth
  variants: {
    topBorderOnly: {
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: 'none',
    },
  },
  // The default variant value
  defaultProps: {},
};

export default Card;
