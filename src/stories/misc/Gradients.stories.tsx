import React from 'react';
import { StoryFn } from '@storybook/react';
import { Flex, SimpleGrid, Heading, Text, Stack } from '../..';

export default {
  title: 'System/Gradients',
};

const gradients = [
  { name: 'Primary Gradient', style: 'primaryGradient' },
  {
    name: 'Red To Purple Vertical Gradient',
    style: 'redToPurpleVerticalGradient',
  },
  {
    name: 'Purple To Red Vertical Gradient',
    style: 'purpleToRedVerticalGradient',
  },
  {
    name: 'Red To Purple Horizontal Gradient',
    style: 'redToPurpleHorizontalGradient',
  },
  {
    name: 'Purple To Red Diagonal Gradient',
    style: 'purpleToRedDiagonalGradient',
  },
];

const Gradients: StoryFn = () => (
  <SimpleGrid columns={2} gap={6}>
    {gradients.map((gradient) => (
      <Flex
        key={gradient.style}
        layerStyle={gradient.style}
        h='250px'
        align='center'
        justify='center'
        borderRadius='xl'
      >
        <Stack spacing={4} align='center'>
          <Heading size='md' maxW='70%' textAlign='center'>
            {gradient.name}
          </Heading>
          <Text
            fontFamily='jetbrains'
            fontSize='sm'
          >{`layerStyle='${gradient.style}'`}</Text>
        </Stack>
      </Flex>
    ))}
  </SimpleGrid>
);

export { Gradients };
