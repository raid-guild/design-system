import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
  Heading,
  VStack,
  Text,
  HStack,
  Image,
  Tooltip,
} from '@chakra-ui/react';

import raidGuildLogoLeft from '../assets/images/raid--left.png';
import raidGuildLogoRight from '../assets/images/raid--right.png';
import season2 from '../assets/images/Season2-DAO-02b.png';
import { FooterSimple } from '../components/footers/Simple';
// import { Card } from '../theme/components/cards/Card';

export default {
  title: 'Raid Guild Design System',
} as Meta;

const Template: Story = () => (
  <>
    <HStack justifyContent="center">
      <Image src={raidGuildLogoLeft} alt="Swords logo" maxH="75vh" />

      <VStack align="center" spacing="5vh">
        <Heading as="h1" size="3xl" color="white" textAlign="center">
          Raid Guild Design Guide
        </Heading>
        <Text align="center" mb={5} fontFamily="texturina">
          Use the navigation on the left to explore existing components built
          with Raid Guild styling.
        </Text>
        <Tooltip label="Raid Guild Cohort 2" aria-label="Raid Guild Cohort 2">
          <Image src={season2} alt="Raid Guild Cohort 2, FTW!" maxH="20vh" />
        </Tooltip>
      </VStack>
      <Image src={raidGuildLogoRight} alt="Swords logo" maxH="75vh" />
    </HStack>
    <FooterSimple />
    {/* <Card variant="flat">
      <Image
        src="https://chakra-ui.com/eric.jpg"
        rounded="full"
        w={32}
        h={32}
        boxShadow="md"
      />
      <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
        Welcome back, Eric
      </Heading>

      <Image src="https://chakra-ui.com/eric.jpg" w={32} h={32} />
    </Card> */}
  </>
);

export const LandingPage = Template.bind({});
