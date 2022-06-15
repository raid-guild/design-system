import type { StoryFn } from '@storybook/react';
import React from 'react';
import { BuiltByRaidGuildComponent } from '../..';

export default {
  title: 'Components/Molecules/BuiltByRaidGuild',
  component: BuiltByRaidGuildComponent,
};

const BuiltByRaidGuild: StoryFn = () => <BuiltByRaidGuildComponent />;

export { BuiltByRaidGuild };
