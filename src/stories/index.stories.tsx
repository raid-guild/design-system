import { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';
import React from 'react';

import { Heading, Stack, Text, Flex, Box } from '..';

import castle from '../assets/images/raid-guild-castle.png';
import FooterSimple from '../components/footers/Simple';

export const RaidGuildDesignSystem: StoryFn = () => (
  <Box position='relative'>
    <Box
      bgImg={castle}
      left={0}
      top={0}
      right={0}
      bottom={0}
      backgroundSize='cover'
      backgroundPosition='right'
      backgroundRepeat='no-repeat'
      opacity={0.4}
      position='absolute'
      zIndex={-1}
    />
    <Flex direction='column' justify='space-between' minH='70vh' w='100%'>
      <Stack align='center' spacing={6} my={40}>
        <Heading as='h1' size='3xl' color='white' textAlign='center'>
          Raid Guild Design Guide
        </Heading>
        <Text align='center' mb={5} fontFamily='texturina'>
          Use the navigation on the left to explore existing components built
          with Raid Guild styling.
        </Text>
      </Stack>
      <FooterSimple />
    </Flex>
  </Box>
);

export default {
  title: 'Raid Guild Design System',
  component: RaidGuildDesignSystem,
} as Meta;
