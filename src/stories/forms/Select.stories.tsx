import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { Select as SelectComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Forms/Select/HookForm',
  component: SelectComponent,
} as Meta<typeof SelectComponent>;

type SelectVariant = {
  name: string;
  variant: 'outline' | 'filled' | 'flushed';
  isMulti?: boolean;
  creatable?: boolean;
  basicStyles?: boolean;
  tooltip?: string;
  helperText?: string;
};

const selectVariants: SelectVariant[] = [
  {
    name: 'Single Outline',
    variant: 'outline',
    isMulti: false,
    tooltip: 'this is a tooltip',
    helperText: 'This is a helper text',
  },
  {
    name: 'Single Filled',
    variant: 'filled',
    isMulti: false,
    tooltip: 'this is a tooltip',
    helperText: 'This is a helper text',
  },
  {
    name: 'Single Flushed',
    variant: 'flushed',
    isMulti: false,
    tooltip: 'this is a tooltip',
    helperText: 'This is a helper text',
  },
  {
    name: 'Single Outline Basic',
    variant: 'outline',
    isMulti: false,
    basicStyles: true,
  },

  {
    name: 'Multi Outline',
    variant: 'outline',
    isMulti: true,
    tooltip: 'this is a tooltip',
    helperText: 'This is a helper text',
  },
  {
    name: 'Multi Filled',
    variant: 'filled',
    isMulti: true,
    tooltip: 'this is a tooltip',
  },
  {
    name: 'Multi Flushed',
    variant: 'flushed',
    isMulti: true,
    tooltip: 'this is a tooltip',
  },
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

const HookForm: StoryFn<typeof SelectComponent> = () => {
  const localForm = useForm();
  return (
    <Box w='50%'>
      <Stack spacing={5}>
        {selectVariants.map((select) => (
          <Stack spacing={3} key={select.variant}>
            <SelectComponent
              name={select.name}
              label={select.name}
              options={
                select.isMulti === true ? multiSelectOptions : selectOptions
              }
              variant={select.variant}
              localForm={localForm}
              isMulti={select.isMulti}
              basicStyles={select.basicStyles}
              tooltip={select.tooltip}
              helperText={select.helperText}
            />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export { HookForm };
