import React, { useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { ControlledTextarea as TextareaComponent, Box, Stack } from '../../..';

export default {
  title: 'Components/Forms/Textarea/Controlled',
  component: TextareaComponent,
} as any; // as Meta;

const textareaVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
  { name: 'Solid Outline', variant: 'solidOutline' },
];

const Controlled: StoryFn<typeof TextareaComponent> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {textareaVariants.map((textarea) => {
        const [testValue, setTestValue] = useState<string>('');
        const handleValueChange = (
          e: React.ChangeEvent<HTMLTextAreaElement>
        ) => {
          setTestValue(e.target.value);
        };

        return (
          <TextareaComponent
            key={textarea.variant}
            label={`ControlledTextarea - ${textarea.name} Variant`}
            variant={textarea.variant}
            value={testValue}
            placeholder='Optional placeholder value' // passes in via the props spread
            onChange={(e) => handleValueChange(e)}
          />
        );
      })}
    </Stack>
  </Box>
);

export { Controlled };
