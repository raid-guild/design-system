import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { Select as SelectComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/Select',
  component: SelectComponent,
} as Meta<typeof SelectComponent>;

type SelectVariant = {
  name: string;
  variant: 'outline' | 'filled' | 'flushed';
  isMulti?: boolean;
};

const selectVariants: SelectVariant[] = [
  { name: 'Single Outline', variant: 'outline' },
  { name: 'Single Filled', variant: 'filled' },
  { name: 'Single Flushed', variant: 'flushed' },
  { name: 'Multi Outline', variant: 'outline', isMulti: true },
  { name: 'Multi Filled', variant: 'filled', isMulti: true },
  { name: 'Multi Flushed', variant: 'flushed', isMulti: true },
];

const selectOptions = [
  { label: '$1000', value: 1000 },
  { label: '$10,000', value: 10000 },
];

const multiSelectOptions = [
  { label: 'Frontend Dev', value: 'Frontend Dev' },
  { label: 'Backend Dev', value: 'Backend Dev' },
  { label: 'Design', value: 'Design' },
  { label: 'Smart Contracts', value: 'Smart Contracts' },
];

const Select: StoryFn<typeof SelectComponent> = () => {
  const localForm = useForm();
  return (
    <Box w='50%'>
      <Stack spacing={5}>
        {selectVariants.map((select) => (
          <Stack spacing={3}>
            <Text>{select.name}</Text>
            <SelectComponent
              name='testSelect'
              options={
                select.isMulti === true ? multiSelectOptions : selectOptions
              }
              variant={select.variant}
              localForm={localForm}
              isMulti={select.isMulti}
              basicStyles
            />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export { Select };
