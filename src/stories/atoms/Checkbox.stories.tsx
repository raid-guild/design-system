import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Checkbox as CheckboxComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/Checkbox',
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

const checkboxSizes = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const checkboxOptions = [
  { label: '$1000', value: '1000' },
  { label: '$10,000', value: '10000' },
];

const Checkbox: ComponentStory<typeof CheckboxComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {checkboxSizes.map((size) => (
        <Stack key={size.size}>
          <Text>{size.name}</Text>
          <CheckboxComponent
            name='testing'
            options={checkboxOptions}
            defaultValue={['1000']}
            size={size.size}
          />
        </Stack>
      ))}
    </Stack>
  </Box>
);

export { Checkbox };
