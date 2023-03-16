import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip as TooltipComponent,
  Button,
  defaultTheme,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Atoms/Tooltip',
  component: TooltipComponent,
} as Meta<typeof TooltipComponent>;
type Story = StoryObj<typeof TooltipComponent>;

const TooltipStoryContent = () => (
  <TooltipComponent
    label="Reason you can't click"
    placement='end'
    shouldWrapChildren
    hasArrow
  >
    <Button>Can&apos;t Click</Button>
  </TooltipComponent>
);

export const Guild: Story = {
  render: () => <TooltipStoryContent />,
  name: 'RaidGuild',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <TooltipStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
