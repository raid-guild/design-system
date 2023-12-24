import _ from 'lodash';
import RGTokens from './tokens';

interface ColorTokenInterface {
  value: string;
  type: string;
}

const chakraColors = _.mapValues(RGTokens.colors, (colors) =>
  _.mapValues(colors, (color: ColorTokenInterface) => color.value)
);

const Colors = {
  ...chakraColors,
  ...chakraColors.base,
};

export default Colors;
