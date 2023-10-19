import _ from 'lodash';
import RGTokens from 'components/tokens';

interface colorTokenInterface {
  value: string;
  type: string;
}

const chakraColors = _.mapValues(RGTokens.colors, (colors) =>
  _.mapValues(colors, (color: colorTokenInterface) => color.value)
);

console.log(chakraColors);

const Colors = {
  ...chakraColors,
  headerGradient: {
    500: 'linear-gradient(96.18deg, rgb(255, 56, 100) -44.29%, rgb(139, 29, 186) 53.18%, rgb(67, 83, 223) 150.65%)',
  },
  rgGradient: {
    500: 'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
  },
};

export default Colors;
