// import SpaceMonoBold from '../../../../assets/fonts/SpaceMono/Bold.woff';
// import SpaceMonoBoldItalic from '../../../../assets/fonts/SpaceMono/BoldItalic.woff';
// import SpaceMonoItalic from '../../../../assets/fonts/SpaceMono/Italic.woff';
import SpaceMonoRegular from '../../../../assets/fonts/SpaceMono/Regular.woff';
import SpaceMonoWoff2 from '../../../../assets/fonts/SpaceMono/Regular.woff2';

const SpaceMono = [
  {
    family: 'Space Mono',
    weight: 500,
    sources: [{ location: SpaceMonoRegular, format: 'woff' }],
  },
  {
    family: 'Space Mono',
    weight: 500,
    sources: [{ location: SpaceMonoWoff2, format: 'woff2' }],
  },
  // {
  //   family: 'Space Mono',
  //   weight: 600,
  //   sources: [{ location: SpaceMonoBold, format: 'woff' }],
  // },
  // {
  //   family: 'Space Mono',
  //   style: 'italic',
  //   weight: 500,
  //   sources: [{ location: SpaceMonoItalic, format: 'woff' }],
  // },
  // {
  //   family: 'Space Mono',
  //   style: 'italic',
  //   weight: 600,
  //   sources: [{ location: SpaceMonoBoldItalic, format: 'woff' }],
  // },
];

export default SpaceMono;
