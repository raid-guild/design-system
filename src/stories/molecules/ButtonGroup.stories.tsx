import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonGroup, clientTheme, defaultTheme } from '../..';

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    isAttached: { control: 'boolean' },
    spacing: { control: 'number' },
    size: { options: ['xs', 'sm', 'md', 'lg'], control: { type: 'radio' } },
  },
} as Meta;
type Story = StoryObj<typeof ButtonGroup>;

const Template: StoryFn<{ buttons: string[]; isAttached?: boolean }> = ({
  buttons,
  ...args
}: {
  buttons: string[];
}) => <ButtonGroup buttons={buttons} onSelect={() => null} {...args} />;

export const GuildAttached: Story = {
  render: (args) => <Template {...args} />,
  name: 'RaidGuild - Attached',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
  args: {
    buttons: ['Tic', 'Tac', 'Toe'],
    isAttached: true,
  },
};

export const GuildSpaced: Story = {
  render: (args) => <Template {...args} />,
  name: 'RaidGuild - Spaced',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
  args: {
    buttons: ['Tic', 'Tac', 'Toe'],
    isAttached: false,
  },
};

export const ClientAttached: Story = {
  render: (args) => <Template {...args} />,
  name: 'ClientTheme - Attached',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
  args: {
    buttons: ['Tic', 'Tac', 'Toe'],
    isAttached: true,
  },
};

export const ClientSpaced: Story = {
  render: (args) => <Template {...args} />,
  name: 'ClientTheme - Spaced',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
  args: {
    buttons: ['Tic', 'Tac', 'Toe'],
    isAttached: false,
  },
};
