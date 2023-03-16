import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Badge as BadgeComponent,
  Stack,
  HStack,
  defaultTheme,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Atoms/Badge',
  component: BadgeComponent,
} as Meta<typeof BadgeComponent>;
type Story = StoryObj<typeof BadgeComponent>;

const badgeColors = [
  { name: 'Default', color: 'gray' },
  { name: 'Red', color: 'red' },
  { name: 'Raid Guild Red', color: 'primary' },
  { name: 'Green', color: 'green' },
];

const badgeVariants = ['outline', 'solid', 'subtle'];

const BadgeStoryContent = () => (
  <Stack>
    {badgeColors.map((b) => (
      <HStack key={b.name}>
        {badgeVariants.map((variant: string) => (
          <BadgeComponent
            colorScheme={b.color}
            variant={variant}
            key={`${b.name} - ${variant}`}
          >
            {`${b.name} - ${variant}`}
          </BadgeComponent>
        ))}
      </HStack>
    ))}
  </Stack>
);

export const Guild: Story = {
  render: () => <BadgeStoryContent />,
  name: 'RaidGuild',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <BadgeStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
