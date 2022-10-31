import React from 'react';
import { Heading } from '../../atoms';
import { Stack, Link } from '../../chakra';
import { RaidGuild } from '../../icons';

export interface BuiltByRaidGuildProps {
  copy?: string;
  color?: string;
}

const BuiltByRaidGuildComponent: React.FC<BuiltByRaidGuildProps> = ({
  copy,
  color,
}: BuiltByRaidGuildProps) => (
  <Stack
    as={Link}
    align='center'
    w='240px'
    href='https://raidguild.org'
    isExternal
    spacing={2}
  >
    <Heading variant='noShadow' size='md'>
      {copy || 'Brought to you by:'}
    </Heading>
    <RaidGuild width='200px' height='60px' color={color || 'primary.500'} />
  </Stack>
);

export default BuiltByRaidGuildComponent;
