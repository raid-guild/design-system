import React from 'react';
import { StoryFn } from '@storybook/react';
import { Card, Image, HStack, SimpleGrid, Heading, Text } from '../..';
import imgDesignSprints from '../../assets/images/designsprints.png';
import { RoleBadge } from '../../components/molecules';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Atoms/Cards',
  component: Card,
}; // as Meta<typeof Card>;

const cardVariants = [
  'fullBorder',
  'topBorderOnly',
  'rainbowBorder',
  'topRainbowBorder',
  'filled',
  'outline',
];

const title = 'Card Title';
const cardCopy =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eius amet quisquam ratione, perspiciatis voluptatem officia.';

const Cards: StoryFn<typeof Card> = () => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 2 }}
    gap='4rem'
    my='2rem'
    ml={{ lg: '3rem' }}
    bg='blue.800'
    p={8}
  >
    {cardVariants.map((variant) => (
      <Card variant={variant} key={variant}>
        <Heading as='h4' size='xl' color='white' textAlign='center' mb={4}>
          {title}
        </Heading>

        <Image src={imgDesignSprints} alt={title} my='1.5rem' />
        <HStack align='flex-end' spacing={3}>
          <Text fontSize='xl' fontWeight={800}>
            Variant:
          </Text>
          <Text fontFamily='jetbrains'>
            {variant} {variant === 'fullBorder' ? '(Default)' : ''}
          </Text>
        </HStack>

        <Text>{cardCopy}</Text>
      </Card>
    ))}
    <Card
      heading={<Heading variant='noShadow'>Testing test</Heading>}
      centerDivider={
        <RoleBadge
          roleName='archer'
          width='50px'
          height='50px'
          border='2px solid'
        />
      }
      variant='withHeader'
      bg='whiteAlpha.200'
    >
      <Text>Variant: withHeader</Text>
    </Card>
  </SimpleGrid>
);

export { Cards };
