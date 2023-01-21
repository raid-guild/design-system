// import _ from 'lodash';
import TexturinaTtf from '../../../../assets/fonts/Texturina/Regular.ttf';
import TexturinaWoff from '../../../../assets/fonts/Texturina/Regular.woff2';
import { Font } from './util';

const Texturina: Font[] = [
  {
    family: 'Texturina',
    style: 'normal',
    weight: 400,
    sources: [{ location: TexturinaTtf, format: 'ttf' }],
  },
  {
    family: 'Texturina',
    style: 'normal',
    weight: 400,
    sources: [{ location: TexturinaWoff, format: 'woff2' }],
  },
];

export default Texturina;
