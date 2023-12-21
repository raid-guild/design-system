import React from 'react';
import { StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { RadioBox as RadioBoxComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Forms/RadioBox/HookForm',
  component: RadioBoxComponent,
} as any; // as Meta<typeof RadioBoxComponent>;

const radioSizes: {
  name: string;
  size: 'sm' | 'md' | 'lg';
  helperText?: string;
  tooltip?: string;
}[] = [
  {
    name: 'Small',
    size: 'sm',
    helperText: 'This is a helper text',
    tooltip: 'This is a tooltip',
  },
  {
    name: 'Medium',
    size: 'md',
    helperText: 'This is a helper text',
    tooltip: 'This is a tooltip',
  },
  {
    name: 'Large',
    size: 'lg',
  },
];

const radioOptions = ['1000', '10000'];

const HookForm: StoryFn<typeof RadioBoxComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {radioSizes.map((size) => {
        const localForm = useForm();

        return (
          <Stack key={size.size}>
            <RadioBoxComponent
              name='testing'
              label={size.name}
              options={radioOptions}
              defaultValue='1000'
              localForm={localForm}
              size={size.size}
              stack='horizontal'
              helperText={size.helperText}
              tooltip={size.tooltip}
            />
          </Stack>
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
