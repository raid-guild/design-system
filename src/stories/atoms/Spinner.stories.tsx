import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Spinner as SpinnerComponent, Stack } from '../..';

export default {
  title: 'Components/Atoms/Spinner',
  component: SpinnerComponent,
} as ComponentMeta<typeof SpinnerComponent>;

const spinnerSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const Spinner: ComponentStory<typeof SpinnerComponent> = () => (
  <Stack>
    {spinnerSizes.map((size) => (
      <SpinnerComponent size={size} key={size} />
    ))}
  </Stack>
);

export { Spinner };
