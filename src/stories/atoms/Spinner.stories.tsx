import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner as SpinnerComponent, Stack } from '../..';

export default {
  title: 'Components/Atoms/Spinner',
  component: SpinnerComponent,
} as ComponentMeta<typeof SpinnerComponent>;

const spinnerSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const Spinner: ComponentStory<typeof SpinnerComponent> = () => (
  <Stack>
    {spinnerSizes.map((size) => (
      <SpinnerComponent thickness='4px' speed='0.65s' size={size} color='red' />
    ))}
  </Stack>
);

export { Spinner };
