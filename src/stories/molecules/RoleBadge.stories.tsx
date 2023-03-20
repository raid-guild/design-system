import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import { SimpleGrid, Stack } from '../../components/chakra';
import { Heading } from '../../components/atoms';
import { RoleBadge } from '../../components/molecules/RoleBadge';
import defaultTheme, { clientTheme } from '../../theme';

const roles = [
  'alchemist',
  'archer',
  'cleric',
  'druid',
  'dwarf',
  'healer',
  'hunter',
  'monk',
  'necromancer',
  'paladin',
  'ranger',
  'rogue',
  'scribe',
  'tavernkeeper',
  'warrior',
  'wizard',
];

type RoleBadgeStoryProps = {
  size: number;
};

const Template: StoryFn<RoleBadgeStoryProps> = ({
  size,
}: RoleBadgeStoryProps) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 6 }}
      gap='4rem'
      my='2rem'
      ml={{ lg: '3rem' }}
    >
      {roles.map((roleName) => (
        <Stack key={roleName} align='center' spacing={4}>
          <RoleBadge roleName={roleName} width={size} height={size} />
          <Heading
            variant='shadow'
            size='sm'
            content={roleName.toUpperCase()}
          />
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default {
  title: 'Components/Molecules/RoleBadges',
  component: RoleBadge,
} as Meta;
type Story = StoryObj<RoleBadgeStoryProps>;

export const Guild: Story = {
  render: (args) => <Template {...args} />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
  args: {
    size: 150,
  },
};

export const Client: Story = {
  render: (args) => <Template {...args} />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
  args: {
    size: 150,
  },
};
