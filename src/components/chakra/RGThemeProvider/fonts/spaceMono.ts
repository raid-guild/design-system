import { ASSETS_BASE_URL } from './util';

const family = 'Space Mono';

const SpaceMono = [
  {
    family,
    weight: 500,
    sources: [
      { location: `${ASSETS_BASE_URL}/SpaceMono/Regular.woff`, format: 'woff' },
      {
        location: `${ASSETS_BASE_URL}/SpaceMono/Regular.woff2`,
        format: 'woff2',
      },
    ],
  },
  {
    family,
    weight: 600,
    sources: [
      { location: `${ASSETS_BASE_URL}/SpaceMono/Bold.woff`, format: 'woff' },
    ],
  },
  {
    family,
    style: 'italic',
    weight: 500,
    sources: [
      { location: `${ASSETS_BASE_URL}/SpaceMono/Italic.woff`, format: 'woff' },
    ],
  },
  {
    family,
    style: 'italic',
    weight: 600,
    sources: [
      {
        location: `${ASSETS_BASE_URL}/SpaceMono/BoldItalic.woff`,
        format: 'woff',
      },
    ],
  },
];

export default SpaceMono;
