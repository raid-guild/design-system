import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ControlledInput as InputComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Atoms/ControlledInput',
  component: InputComponent,
} as Meta;

const inputVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const ControlledInput: StoryFn<typeof InputComponent> = () => {
  const [testValue, setTestValue] = useState<string>(''); // these all share state for the Storybook example
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestValue(e.target.value);
  };

  return (
    <Box m='15px'>
      <Stack spacing={4}>
        {inputVariants.map((input) => (
          <InputComponent
            label={`ControlledInput - ${input.name} Variant`}
            variant={input.variant}
            value={testValue}
            placeholder='Optional placeholder value' // passes in via the props spread
            onChange={(e) => handleValueChange(e)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export { ControlledInput };
