import React from 'react';
import { useForm } from 'react-hook-form';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Select as SelectComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/Select',
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const selectVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Filled', variant: 'filled' },
  { name: 'Flushed', variant: 'flushed' },
];

const selectOptions = [
  { label: '$1000', value: 1000 },
  { label: '$10,000', value: 10000 },
];

const Select: ComponentStory<typeof SelectComponent> = () => {
  const localForm = useForm();
  return (
    <Box w='50%'>
      <Stack spacing={5}>
        {selectVariants.map((select) => (
          <Stack spacing={3}>
            <Text>{select.name}</Text>
            <SelectComponent
              name='testing'
              options={selectOptions}
              variant={select.variant}
              localForm={localForm}
            />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export { Select };
