import RGTokens from 'components/tokens';
import _ from 'lodash';

console.log(RGTokens.gradient);

const chakraGradients = _.mapValues(RGTokens.gradient, (gradient) => ({
  bgGradient: gradient.value,
}));

console.log(chakraGradients);

const GradientStyles = {
  ...chakraGradients,
  primaryGradient: {
    bgGradient: `
      radial-gradient(97.27% 170.54% at 98.7% 2.73%, #24003A 0%, rgba(0, 0, 0, 0) 100%),
      radial-gradient(100% 350.19% at 100% 100%, #170011 0%, rgba(23, 0, 17, 0) 100%),
      radial-gradient(50% 175.1% at 0% 100%, #130000 0%, rgba(31, 0, 0, 0) 100%),
      radial-gradient(50% 175.1% at 0% 0%, #330F00 0%, rgba(51, 15, 0, 0) 100%),
      linear-gradient(0deg, #000000, #000000)`,
  },
  redToPurpleVerticalGradient: {
    bgGradient:
      'linear-gradient(102.93deg, #2B0000 0%, #3D0610 29.17%, #5A1049 61.98%, #461881 100%)',
  },
  purpleToRedVerticalGradient: {
    bgGradient:
      'linear-gradient(281.37deg, #2B0000 -4.6%, #3D0610 26.67%, #5A1049 61.86%, #461881 102.63%)',
  },
  redToPurpleHorizontalGradient: {
    bgGradient:
      'linear-gradient(180deg, #2B0000 0%, #3D0610 29.17%, #5A1049 61.98%, #461881 100%)',
  },
  purpleToRedDiagonalGradient: {
    bgGradient:
      'linear-gradient(157.1deg, #22002b 0%, #390418 29.17%, #48093A 61.98%, #1F0442 100%)',
  },
};

console.log(GradientStyles);

export default GradientStyles;
