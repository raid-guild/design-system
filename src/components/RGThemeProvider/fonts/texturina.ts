import { Font, ASSETS_BASE_URL } from './util';

const family = 'Texturina';

const Texturina: Font[] = [
  {
    family,
    sources: [
      { location: `${ASSETS_BASE_URL}/Texturina/Regular.ttf`, format: 'ttf' },
    ],
  },
  {
    family,
    sources: [
      {
        location: `${ASSETS_BASE_URL}/Texturina/Regular.woff2`,
        format: 'woff2',
      },
    ],
  },
];

export default Texturina;
