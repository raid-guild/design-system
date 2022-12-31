import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ControlledTextarea as TextareaComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Atoms/ControlledTextarea',
  component: TextareaComponent,
} as Meta;

const textareaVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const ControlledTextarea: StoryFn<typeof TextareaComponent> = () => {
  const [testValue, setTestValue] = useState<string>(''); // these all share state for the Storybook example
  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTestValue(e.target.value);
  };
  return (
    <Box m='15px'>
      <Stack spacing={4}>
        {textareaVariants.map((textarea) => (
          <TextareaComponent
            label={`ControlledTextarea - ${textarea.name} Variant`}
            variant={textarea.variant}
            value={testValue}
            placeholder='Optional placeholder value' // passes in via the props spread
            onChange={(e) => handleValueChange(e)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export { ControlledTextarea };
