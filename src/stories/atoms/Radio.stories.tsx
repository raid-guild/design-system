import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio as RadioComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/Radio',
  component: RadioComponent,
} as ComponentMeta<typeof RadioComponent>;

const radioSizes = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const radioOptions = [
  { label: '$1000', value: '1000' },
  { label: '$10,000', value: '10000' },
];

const Radio: ComponentStory<typeof RadioComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {radioSizes.map((size) => (
        <Stack key={size.size}>
          <Text>{size.name}</Text>
          <RadioComponent
            name='testing'
            options={radioOptions}
            defaultValue='1000'
            size={size.size}
          />
        </Stack>
      ))}
    </Stack>
  </Box>
);

export { Radio };
