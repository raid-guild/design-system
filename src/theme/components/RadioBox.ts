const RadioBox = {
  variants: {
    default: {
      _hover: {
        cursor: 'pointer',
      },
      color: 'primary.500',
      boxShadow: 'md',
      border: '1px solid',
      borderColor: 'primary.500',
      _checked: {
        bg: 'primary.500',
        color: 'white',
        borderColor: 'primary.500',
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
