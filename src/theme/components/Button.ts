import GradientStyles from '../gradientStyles';

const Button = {
  baseStyle: {
    textTransform: 'uppercase',
  },
  defaultProps: {
    colorScheme: 'primary',
    variant: 'solid',
    fontWeight: '400',
    fontFamily: 'texturina',
  },
  variants: {
    solid: {
      bg: 'purple.500',
      borderRadius: '2px',
      maxWidth: '100%',
      width: 'auto',
      height: '40px',
      paddingLeft: '24px',
      paddingRight: '24px',
      color: 'white',
      _hover: {
        bg: 'primary.500',
      },
    },
    bright: {
      color: 'white',
      borderRadius: '2px',
      maxWidth: '100%',
      width: 'auto',
      height: '40px',
      paddingLeft: '24px',
      paddingRight: '24px',
      background: GradientStyles.orangeToPurpleDiagonalGradient.bgGradient,
      _hover: {
        background: GradientStyles.orangeToPurpleSharpGradient.bgGradient,
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    outline: {
      bg: 'transparent',
      border: '2px solid',
      maxWidth: '100%',
      width: 'auto',
      height: '40px',
      paddingLeft: '24px',
      paddingRight: '24px',
      borderRadius: '2px',
      color: 'purple.500',
      _hover: {
        borderImageSlice: 1,
        borderImageSource: 'linear-gradient(96deg, #FF3864 0%, #8B1DBA 71.35%)',
        background: 'linear-gradient(96deg, #FF3864 0%, #8B1DBA 71.35%)',
        color: 'transparent',
        backgroundClip: 'text',
      },
    },
    gradientOutline: {
      border: '2px solid',
      borderRadius: '2px',
      maxWidth: '100%',
      width: 'auto',
      height: '40px',
      paddingLeft: '24px',
      paddingRight: '24px',
      borderImageSlice: 1,
      borderImageSource: 'linear-gradient(96deg, #FF3864 0%, #8B1DBA 71.35%)',
      background: 'linear-gradient(96deg, #FF3864 0%, #8B1DBA 71.35%)',
      color: 'transparent',
      backgroundClip: 'text',
      _hover: {
        background: 'linear-gradient(96deg, #FF3864 0%, #8B1DBA 71.35%)',
        color: 'white',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    ghost: {
      color: 'purple.500',
      borderRadius: '2px',
      maxWidth: '100%',
      width: 'auto',
      height: '40px',
      paddingLeft: '24px',
      paddingRight: '24px',
      bg: 'whiteAlpha.100',
      _hover: {
        bg: 'purple.500',
        color: 'white',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
  },
};

export default Button;
