import React from 'react';
import { useForm } from 'react-hook-form';
import type { ComponentStory } from '@storybook/react';
import { Textarea as TextareaComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Atoms/Textarea',
  component: TextareaComponent,
};

const textareaVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const Textarea: ComponentStory<typeof TextareaComponent> = () => {
  const localForm = useForm();
  return (
    <Box m='15px'>
      <Stack spacing={4}>
        {textareaVariants.map((textarea) => (
          <TextareaComponent
            label={`Textarea - ${textarea.name} Variant`}
            name='test'
            variant={textarea.variant}
            localForm={localForm}
          />
        ))}
      </Stack>
    </Box>
  );
};

export { Textarea };
