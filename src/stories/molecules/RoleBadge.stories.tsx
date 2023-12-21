import type { StoryFn } from '@storybook/react';
import React from 'react';
import { SimpleGrid, Stack } from '../../components/chakra';
import { Heading } from '../../components/atoms';
import { RoleBadge } from '../../components/molecules/RoleBadge';

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

export const RoleBadges: any = Template.bind({});
RoleBadges.args = {
  size: 150,
};

export default {
  title: 'Components/Molecules/RoleBadges',
  component: RoleBadges,
}; // as Meta;
