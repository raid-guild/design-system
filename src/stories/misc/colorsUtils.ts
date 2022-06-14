import _ from 'lodash';

export const importantColors: any = {
  // [colorName]: 'What it's used for',
  'red.500': 'Raid Guild Ruby Red\n(Primary Color)',
  'primary.500': 'Raid Guild Ruby Red\n(Primary Color)',
};

export const miscColors = [
  'facebook',
  'linkedin',
  'messenger',
  'telegram',
  'twitter',
  'whatsapp',
];

export const colorsWithObject = (_colors: any) => {
  const obj: any = { colors: {}, misc: {} };

  _.map(_colors, (color, key) => {
    if (_.has(color, '50')) {
      if (!_.includes(miscColors, key)) {
        obj.colors[key] = color;
      } else {
        obj.misc[key] = color;
      }
    }
  });
  return obj;
};

export const colorsThatNeedDarkText = [
  // whiteAlpha
  'whiteAlpha.700',
  'whiteAlpha.800',
  'whiteAlpha.900',
  // blackAlpha
  // NONE
  // gray
  'gray.50',
  'gray.100',
  'gray.200',
  'gray.300',
  'gray.400',
  // red
  'red.50',
  'red.100',
  'red.200',
  'red.300',
  // orange
  'orange.50',
  'orange.100',
  'orange.200',
  'orange.300',
  // yellow
  'yellow.50',
  'yellow.100',
  'yellow.200',
  'yellow.300',
  'yellow.400',
  'yellow.500',
  // green
  'green.50',
  'green.100',
  'green.200',
  'green.300',
  'green.400',
  'green.500',
  // teal
  'teal.50',
  'teal.100',
  'teal.200',
  'teal.300',
  // blue
  'blue.50',
  'blue.100',
  'blue.200',
  'blue.300',
  // cyan
  'cyan.50',
  'cyan.100',
  'cyan.200',
  'cyan.300',
  // purple
  'purple.50',
  'purple.100',
  'purple.200',
  'purple.300',
  // pink
  'pink.50',
  'pink.100',
  'pink.200',
  'pink.300',

  // MISC
  // linkedin
  'linkedin.50',
  'linkedin.100',
  'linkedin.200',
  'linkedin.300',
  'linkedin.400',
  // facebook
  'facebook.50',
  'facebook.100',
  'facebook.200',
  'facebook.300',
  // messenger
  'messenger.50',
  'messenger.100',
  'messenger.200',
  'messenger.300',
  'messenger.400',
  // whatsapp
  'whatsapp.50',
  'whatsapp.100',
  'whatsapp.200',
  'whatsapp.300',
  'whatsapp.400',
  // twitter
  'twitter.50',
  'twitter.100',
  'twitter.200',
  'twitter.300',
  'twitter.400',
  // telegram
  'telegram.50',
  'telegram.100',
  'telegram.200',
  'telegram.300',
  'telegram.400',
];
