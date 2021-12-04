import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import BroughtToYouBuyRaidGuildLogo from '../../../assets/images/raid-guild-logo.svg';

export default function BroughtToYouBuyRaidGuild() {
  return (
    <Box my="3">
      <Text
        as="p"
        fontSize={{ base: '22px' }}
        textAlign="right"
        fontFamily="Uncial Antiqua"
      >
        Brought to you by:
      </Text>
      <Image
        src={BroughtToYouBuyRaidGuildLogo}
        alt="Created by Raid Guild"
        float="right"
      />
    </Box>
  );
}
