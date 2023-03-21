import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Spinner as SpinnerComponent, Stack } from '../..';

export default {
  title: 'Components/Atoms/Spinner',
  component: SpinnerComponent,
} as Meta<typeof SpinnerComponent>;

const spinnerSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const Spinner: StoryFn<typeof SpinnerComponent> = () => (
  <Stack>
    {spinnerSizes.map((size) => (
      <SpinnerComponent size={size} key={size} />
    ))}
  </Stack>
);

export { Spinner };
