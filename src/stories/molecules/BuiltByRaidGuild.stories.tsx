import React from 'react';
import { StoryObj } from '@storybook/react';
import {
  BuiltByRaidGuild as BuiltByRaidGuildComponent,
  clientTheme,
  defaultTheme,
} from '../..';

export default {
  title: 'Components/Molecules/BuiltByRaidGuild',
  component: BuiltByRaidGuildComponent,
};
type Story = StoryObj<typeof BuiltByRaidGuildComponent>;

const BuiltByRaidGuildStoryContent = () => <BuiltByRaidGuildComponent />;

export const Guild: Story = {
  render: () => <BuiltByRaidGuildStoryContent />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <BuiltByRaidGuildStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
