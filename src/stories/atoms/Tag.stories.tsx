import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Tag as TagComponent,
  Stack,
  Text,
  Heading,
  Flex,
  defaultTheme,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Atoms/Tags',
  component: TagComponent,
} as Meta<typeof TagComponent>;
type Story = StoryObj<typeof TagComponent>;

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

const TagsStoryContent = () => (
  <Stack spacing={10}>
    {tagSizes.map((size) => (
      <Stack w='600px' key={size.name}>
        <Heading textAlign='center' size='md' textTransform='uppercase'>
          {size.name}
        </Heading>
        <Flex justify='space-between'>
          {tagVariants.map((tag) => (
            <Stack spacing={3} direction='row' key={tag.name}>
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

export const Guild: Story = {
  render: () => <TagsStoryContent />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <TagsStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
