import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ControlledSelect as SelectComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/ControlledSelect',
  component: SelectComponent,
} as Meta<typeof SelectComponent>;

type SelectVariant = {
  name: string;
  variant: 'outline' | 'filled' | 'flushed';
  isMulti?: boolean;
  creatable?: boolean;
  basicStyles?: boolean;
};

type Option =
  | {
      label: string | number;
      value: string | number;
    }
  | { value: number | null; label: string }
  | { value: number; label: string | null | undefined }
  | { value: null; label: string }
  | { label: string | number; value: string | number }
  | { value: number; label: string };

const selectVariants: SelectVariant[] = [
  { name: 'Single Outline', variant: 'outline', isMulti: false },
  { name: 'Single Filled', variant: 'filled', isMulti: false },
  { name: 'Single Flushed', variant: 'flushed', isMulti: false },
  {
    name: 'Single Outline Basic',
    variant: 'outline',
    isMulti: false,
    basicStyles: true,
  },

  { name: 'Multi Outline', variant: 'outline', isMulti: true },
  { name: 'Multi Filled', variant: 'filled', isMulti: true },
  { name: 'Multi Flushed', variant: 'flushed', isMulti: true },
  {
    name: 'Multi Outline Basic',
    variant: 'outline',
    isMulti: true,
    basicStyles: true,
  },
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

const ControlledSelect: StoryFn<typeof SelectComponent> = () => {
  const [, setSelectedValue] = useState<Option>();
  // these all share state for the Storybook example
  // set your own state via the ControlledSelect's onChange

  return (
    <Box w='50%'>
      <Stack spacing={5}>
        {selectVariants.map((select) => (
          <Stack spacing={3}>
            <Text>{select.name}</Text>
            <SelectComponent
              options={
                select.isMulti === true ? multiSelectOptions : selectOptions
              }
              variant={select.variant}
              isMulti={select.isMulti}
              basicStyles={select.basicStyles}
              onChange={(selection: Option) => setSelectedValue(selection)}
            />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export { ControlledSelect };
