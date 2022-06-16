import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Tag as TagComponent, Stack, Text, Heading, Flex } from '../..';

export default {
  title: 'Components/Atoms/Tags',
  component: TagComponent,
} as ComponentMeta<typeof TagComponent>;

const tagVariants = [
  { name: 'Solid', variant: 'solid' },
  { name: 'Outline', variant: 'outline' },
  { name: 'Subtle', variant: 'subtle' },
];

const tagSizes = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const Tags: ComponentStory<typeof TagComponent> = () => (
  <Stack spacing={10}>
    {tagSizes.map((size) => (
      <Stack w='600px'>
        <Heading textAlign='center' size='md' textTransform='uppercase'>
          {size.name}
        </Heading>
        <Flex justify='space-between'>
          {tagVariants.map((tag) => (
            <Stack spacing={3} direction='row'>
              <Text size='lg'>{tag.name}</Text>
              <TagComponent
                variant={tag.variant}
                size={size.size}
                colorScheme='red'
              >
                Let&apos;s Go
              </TagComponent>
            </Stack>
          ))}
        </Flex>
      </Stack>
    ))}
  </Stack>
);

export { Tags };
