import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  ControlledCheckbox as CheckboxComponent,
  Box,
  Stack,
  Text,
} from '../../..';

export default {
  title: 'Components/Forms/Checkbox/Controlled',
  component: CheckboxComponent,
} as Meta<typeof CheckboxComponent>;

const checkboxSizes = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const checkboxOption = '1000';

const Controlled: StoryFn<typeof CheckboxComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {checkboxSizes.map((size) => {
        const [isChecked, setIsChecked] = useState(false);
        return (
          <Stack key={size.size}>
            <Text>{size.name}</Text>
            <CheckboxComponent
              label={checkboxOption}
              size={size.size}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          </Stack>
        );
      })}
    </Stack>
  </Box>
);

export { Controlled };
