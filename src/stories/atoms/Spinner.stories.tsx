import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  clientTheme,
  defaultTheme,
  Spinner as SpinnerComponent,
  Stack,
} from '../..';

export default {
  title: 'Components/Atoms/Spinner',
  component: SpinnerComponent,
} as Meta<typeof SpinnerComponent>;
type Story = StoryObj<typeof SpinnerComponent>;

const spinnerSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const SpinnerStoryContent = () => (
  <Stack>
    {spinnerSizes.map((size) => (
      <SpinnerComponent size={size} key={size} />
    ))}
  </Stack>
);

export const Guild: Story = {
  render: () => <SpinnerStoryContent />,
  name: 'RaidGuild',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <SpinnerStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
