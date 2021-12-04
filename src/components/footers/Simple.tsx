import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Copyright } from './Copyright';
import BuiltByRaidGuild from '../icons/BuiltByRaidGuild';
import { SocialMediaLinks } from './SocialMediaLinks';

export const FooterSimple = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: '4', md: '8' }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <BuiltByRaidGuild />
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
);
