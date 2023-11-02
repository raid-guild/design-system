import _ from 'lodash';
import RGTokens from 'components/tokens';

interface colorTokenInterface {
  value: string;
  type: string;
}

const chakraColors = _.mapValues(RGTokens.colors, (colors) =>
  _.mapValues(colors, (color: colorTokenInterface) => color.value)
);

const Colors = {
  ...chakraColors,
  ...chakraColors.base,
};

export default Colors;
