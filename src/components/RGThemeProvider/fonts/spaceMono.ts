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
      {
        location: `${ASSETS_BASE_URL}/SpaceMono/Regular.ttf`,
        format: 'ttf',
      },
    ],
  },
  {
    family,
    weight: 600,
    sources: [
      { location: `${ASSETS_BASE_URL}/SpaceMono/Bold.woff`, format: 'woff' },
      { location: `${ASSETS_BASE_URL}/SpaceMono/Bold.ttf`, format: 'ttf' },
    ],
  },
  {
    family,
    style: 'italic',
    weight: 500,
    sources: [
      { location: `${ASSETS_BASE_URL}/SpaceMono/Italic.woff`, format: 'woff' },
      { location: `${ASSETS_BASE_URL}/SpaceMono/Italic.ttf`, format: 'ttf' },
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
      {
        location: `${ASSETS_BASE_URL}/SpaceMono/BoldItalic.ttf`,
        format: 'ttf',
      },
    ],
  },
];

export default SpaceMono;
