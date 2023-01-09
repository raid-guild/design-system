import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ControlledInput as InputComponent, Box, Stack } from '../../..';

export default {
  title: 'Components/Forms/Input/Controlled',
  component: InputComponent,
} as Meta;

const inputVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const Controlled: StoryFn<typeof InputComponent> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {inputVariants.map((input) => {
        const [testValue, setTestValue] = useState<string>('');
        const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setTestValue(e.target.value);
        };

        return (
          <InputComponent
            key={input.variant}
            label={`ControlledInput - ${input.name} Variant`}
            variant={input.variant}
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
