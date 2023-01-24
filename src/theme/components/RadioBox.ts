const RadioBox = {
  variants: {
    default: {
      _hover: {
        cursor: 'pointer',
      },
      color: '#7f5af0',
      boxShadow: 'md',
      border: '1px solid #7f5af0',
      _checked: {
        bg: '#7f5af0',
        color: 'white',
        borderColor: 'teal.600',
      },
      label: {
        fontFamily: 'spaceMono',
      },
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 2,
      py: 1,
    },
    md: {
      fontSize: 'md',
      px: 3,
      py: 2,
    },
    lg: {
      fontSize: 'lg',
      px: 4,
      py: 3,
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
};

export default RadioBox;
