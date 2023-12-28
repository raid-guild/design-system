import React from 'react';
import { useForm } from 'react-hook-form';
import type { StoryFn } from '@storybook/react';
import { Textarea as TextareaComponent, Box, Stack, Divider } from '../..';

export default {
  title: 'Components/Forms/Textarea/HookForm',
  component: TextareaComponent,
}; // as Meta;

const textareaVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
  { name: 'Solid Outline', variant: 'solidOutline' },
];

const HookForm: StoryFn<typeof TextareaComponent> = () => (
  <Box m='15px'>
    <Stack spacing={10} align='center'>
      {textareaVariants.map((textarea) => {
        const localForm = useForm();
        return (
          <>
            <TextareaComponent
              key={textarea.name}
              label={`Textarea - ${textarea.name} Variant`}
              name='test'
              helperText='This is a helper text'
              tooltip='This is a tooltip'
              placeholder='Optional placeholder value'
              variant={textarea.variant}
              localForm={localForm}
            />
            <Divider w='80%' />
          </>
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
