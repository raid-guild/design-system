import React from 'react';
import _ from 'lodash';
import { Global, css } from '@emotion/react';

import { Font, Source } from './fonts/util';
import SpaceMono from './fonts/spaceMono';
import Texturina from './fonts/texturina';
// import TexturinaItalic from './fonts/texturinaItalic';
import UncialAntiqua from './fonts/uncialAntiqua';

import JetBrainsMonoRegular from '../../../assets/fonts/JetBrainsMono/Regular.woff2';

const JetBrainsMono = [
  {
    family: 'JetBrains Mono',
    weight: 400,
    sources: [
      {
        location: JetBrainsMonoRegular,
        format: 'woff2',
      },
    ],
  },
];

const fontList: Font[] = [
  ...SpaceMono,
  ...Texturina,
  // ...TexturinaItalic,
  ...UncialAntiqua,
  ...JetBrainsMono,
];

const sourceMap = ({ location, format }: Source) => {
  return `url('${location}') format('${format}')`;
};

const sourcesStringFormatter = (sources: Source[]) =>
  _.join(_.map(sources, sourceMap), ', ');

const fontStringFormatter = (font: Font) => {
  const fontString = `
    ${_.get(font, 'label') && `/* ${_.get(font, 'label')} */`}
    @font-face {
      font-family: '${_.get(font, 'family')}';
      font-style: normal;
      font-weight: ${_.get(font, 'weight')};
      font-display: swap;
      src: ${sourcesStringFormatter(_.get(font, 'sources'))};
    }
  `;
  return fontString;
};

const styles = _.join(_.map(fontList, fontStringFormatter), '\n');

const Fonts = () => <Global styles={css(styles)} />;

export default Fonts;
