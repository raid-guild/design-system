import { ASSETS_BASE_URL, Font } from './util';

const uncialAntiqua: Font[] = [
  {
    label: 'heading primary',
    family: 'Uncial Antiqua',
    weight: 500,
    sources: [
      {
        location: `${ASSETS_BASE_URL}/UncialAntiqua/Regular.eot`,
        format: 'eot',
      },
      {
        location: `${ASSETS_BASE_URL}/UncialAntiqua/Regular.otf`,
        format: 'otf',
      },
      {
        location: `${ASSETS_BASE_URL}/UncialAntiqua/Regular.ttf`,
        format: 'ttf',
      },
      {
        location: `${ASSETS_BASE_URL}/UncialAntiqua/Regular.woff`,
        format: 'woff',
      },
      {
        location: `${ASSETS_BASE_URL}/UncialAntiqua/Regular.woff2`,
        format: 'woff2',
      },
    ],
  },
];

export default uncialAntiqua;
