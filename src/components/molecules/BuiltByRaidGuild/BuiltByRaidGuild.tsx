import React from 'react';
import { Stack, Heading, Link } from '../../..';
import { BuiltByRaidGuild } from '../../icons';

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
    <BuiltByRaidGuild
      width='200px'
      height='60px'
      color={color || 'primaryAlpha.50'}
    />
  </Stack>
);

export default BuiltByRaidGuildComponent;
