import React from 'react';
import { StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Checkbox as CheckboxComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Forms/Checkbox/HookForm',
  component: CheckboxComponent,
}; // as Meta<typeof CheckboxComponent>;

const checkboxSizes = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const checkboxOptions = ['1000', '10000', '100000', '1000000'];

const HookForm: StoryFn<typeof CheckboxComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {checkboxSizes.map((size) => {
        const localForm = useForm();
        return (
          <Stack key={size.size}>
            <CheckboxComponent
              label={size.name}
              name='testing'
              options={checkboxOptions}
              size={size.size}
              localForm={localForm}
              tooltip='This is a tooltip'
              // placeholder='Optional placeholder value'
              helperText='This is a helper text'
            />
          </Stack>
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
