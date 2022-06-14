import * as React from 'react';
import { Box, Stack, Link } from '@chakra-ui/react';

import BuiltByRaidGuild from '../icons/BuiltByRaidGuild';
import Copyright from './Copyright';
import SocialMediaLinks from './SocialMediaLinks';

const FooterSimple = () => (
  <Box
    as='footer'
    role='contentinfo'
    mx='auto'
    w='90%'
    maxW='1200px'
    py='12'
    px={{ base: '4', md: '8' }}
  >
    <Stack direction='row' spacing='4' align='center' justify='space-between'>
      <Link href='https://raidguild.org' isExternal>
        <Stack>
          <BuiltByRaidGuild width='200px' height='60px' />
          <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
        </Stack>
      </Link>

      <SocialMediaLinks />
    </Stack>
  </Box>
);

export default FooterSimple;
