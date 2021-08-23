import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading, Card, CardProps, VStack, ChakraText, HStack, Image, Tooltip } from '../src';
import raidGuildLogoLeft from '../src/assets/raid--left.png';
import raidGuildLogoRight from '../src/assets/raid--right.png';
import season2 from '../src/assets/Season2-DAO-02b.png';

export default {
  title: 'Raid Guild Design System',
  component: Card,
} as Meta;


const Template: Story<CardProps> = (args) => <Card {...args} />;

export const LandingPage = Template.bind({});
LandingPage.args = {
  children: (
    <HStack>
    <Image src={raidGuildLogoLeft} alt='Swords logo' maxH='75vh' />
    <VStack align="center" spacing="5vh">
        <Heading
            variant="texturina"
            textTransform="uppercase"
            fontSize={{ base: '18px' }}
            textAlign="center"
        >
            Raid Guild Design Guide
        </Heading>
        <ChakraText align="center" mb={5}>
            Use the navigation on the left to explore existing components 
            built with Raid Guild styling.
        </ChakraText>
        <Tooltip label="Raid Guild Cohort 2" aria-label="Raid Guild Cohort 2">
            <Image src={season2} alt="Raid Guild Cohort 2, FTW!" maxH="20vh" />
        </Tooltip>
    </VStack>
    <Image src={raidGuildLogoRight} alt='Swords logo' maxH='75vh' />
    </HStack>
  ),
};

