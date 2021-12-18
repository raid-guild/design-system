import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ChakraHeading,
  Image,
  ChakraText,
  SimpleGrid,
} from '../../components/chakra';
import { Card } from '../../components/atoms';
import imgConsultations from '../../assets/images/consultations.png';
import imgDesignSprints from '../../assets/images/designsprints.png';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Atoms/Cards',
  component: Card,
} as ComponentMeta<typeof Card>;

const title = 'Card Title';
const cardCopy =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eius amet quisquam ratione, perspiciatis voluptatem officia.';

const imgSrc = imgConsultations;

export const Primary: ComponentStory<typeof Card> = () => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 2 }}
    gap='4rem'
    my='2rem'
    ml={{ lg: '3rem' }}
  >
    <Card variant='topBorderOnly'>
      <ChakraHeading as='h4' size='xl' color='white' textAlign='center' mb={4}>
        {title}
      </ChakraHeading>

      <Image src={imgDesignSprints} alt={title} my='1.5rem' />

      <ChakraText>{cardCopy}</ChakraText>
    </Card>
    <Card>
      <ChakraHeading as='h4' size='xl' color='white' textAlign='center' mb={4}>
        {title}
      </ChakraHeading>

      <Image src={imgSrc} alt={title} my='1.5rem' />

      <ChakraText>{cardCopy}</ChakraText>
    </Card>
  </SimpleGrid>
);
