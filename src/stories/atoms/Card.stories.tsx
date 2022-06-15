import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Card, ChakraHeading, Image, ChakraText, SimpleGrid } from '../..';
import imgDesignSprints from '../../assets/images/designsprints.png';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Atoms/Cards',
  component: Card,
} as ComponentMeta<typeof Card>;

const cardVariants = [null, 'topBorderOnly'];

const title = 'Card Title';
const cardCopy =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eius amet quisquam ratione, perspiciatis voluptatem officia.';

const Cards: ComponentStory<typeof Card> = () => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 2 }}
    gap='4rem'
    my='2rem'
    ml={{ lg: '3rem' }}
  >
    {cardVariants.map((variant) => (
      <Card variant={variant} key={variant}>
        <ChakraHeading
          as='h4'
          size='xl'
          color='white'
          textAlign='center'
          mb={4}
        >
          {title}
        </ChakraHeading>

        <Image src={imgDesignSprints} alt={title} my='1.5rem' />

        <ChakraText>{cardCopy}</ChakraText>
      </Card>
    ))}
  </SimpleGrid>
);

export { Cards };
