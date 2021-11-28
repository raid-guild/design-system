// Button.stories.ts|tsx

import React from 'react';
import { Heading, Image, Text, SimpleGrid } from '@chakra-ui/react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../../theme/components/cards/Card';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Cards',
  component: Card,
} as ComponentMeta<typeof Card>;

const title = 'Card Title';
const cardCopy =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eius amet quisquam ratione, perspiciatis voluptatem officia.';
import imgConsultations from '../../assets/images/consultations.png';
import imgDesignSprints from '../../assets/images/designsprints.png';
// import imgFullStack from '../../assets/images/fullstackdev.png';
// import imgMarketing from '../../assets/images/marketing.png';
const imgSrc = imgConsultations;

export const Primary: ComponentStory<typeof Card> = () => (
  <>
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      gap="4rem"
      my="2rem"
      ml={{ lg: '3rem' }}
    >
      <Card variant="topBorderOnly">
        <Heading as="h4" size="xl" color="white" textAlign="center" mb={4}>
          {title}
        </Heading>

        <Image src={imgDesignSprints} alt={title} my="1.5rem" />

        <Text>{cardCopy}</Text>
      </Card>
      <Card>
        <Heading as="h4" size="xl" color="white" textAlign="center" mb={4}>
          {title}
        </Heading>

        <Image src={imgSrc} alt={title} my="1.5rem" />

        <Text>{cardCopy}</Text>
      </Card>
      <Card>
        <Heading as="h4" size="xl" color="white" textAlign="center" mb={4}>
          {title}
        </Heading>

        <Image src={imgSrc} alt={title} my="1.5rem" />

        <Text>{cardCopy}</Text>
      </Card>
      <Card>
        <Heading as="h4" size="xl" color="white" textAlign="center" mb={4}>
          {title}
        </Heading>

        <Image src={imgSrc} alt={title} my="1.5rem" />

        <Text>{cardCopy}</Text>
      </Card>
    </SimpleGrid>
  </>
);

export const Secondary: ComponentStory<typeof Card> = () => (
  <>
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      gap="4rem"
      my="2rem"
      ml={{ lg: '3rem' }}
    >
      <Card borderColor="red">Stuff</Card>
      <Card>Stuff</Card>
      <Card>Stuff</Card>
      <Card>Stuff</Card>
    </SimpleGrid>
  </>
);
