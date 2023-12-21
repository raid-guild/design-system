import React from 'react';
import { StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { RadioBox as RadioBoxComponent, Box, Stack, Text } from '../../..';

export default {
  title: 'Components/Forms/RadioBox/Controlled',
  component: RadioBoxComponent,
} as any; // as Meta<typeof RadioBoxComponent>;

const radioSizes: { name: string; size: 'sm' | 'md' | 'lg' }[] = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const radioOptions = ['1000', '10000'];

const Controlled: StoryFn<typeof RadioBoxComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {radioSizes.map((size) => {
        const localForm = useForm();

        return (
          <Stack key={size.size}>
            <Text>{size.name}</Text>
            <RadioBoxComponent
              name='testing'
              label='Select your budget'
              options={radioOptions}
              defaultValue='1000'
              localForm={localForm}
              size={size.size}
              stack='horizontal'
            />
          </Stack>
        );
      })}
    </Stack>
  </Box>
);

export { Controlled };
