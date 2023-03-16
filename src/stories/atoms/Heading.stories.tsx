import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Heading as HeadingComponent,
  Stack,
  Flex,
  Text,
  HeadingProps,
  defaultTheme,
  clientTheme,
} from '../..';
import { HeadingVariants } from '../../components/atoms/Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: HeadingComponent,
} as Meta;
type Story = StoryObj<typeof HeadingComponent>;

const headingExamples: Array<{ size: string }> = [
  { size: '4xl' },
  { size: '3xl' },
  { size: '2xl' },
  { size: 'xl' },
  { size: 'lg' },
  { size: 'md' },
  { size: 'sm' },
];

const headingVariants: HeadingVariants[] = ['shadow', 'noShadow'];

const copy = 'RaidGuild vs Moloch';

const HeadingStoryContent = (args: HeadingProps) => (
  <Stack spacing={4}>
    {/* Map out each size */}
    {headingExamples.map((example) => (
      <Stack spacing={2} key={example.size}>
        {/* Add both variants */}
        {headingVariants.map((variant) => (
          <Flex align='center' key={`${example.size}-${variant}`}>
            <Text mr={3}>{`${example.size} - ${variant}`}</Text>
            <HeadingComponent size={example.size} variant={variant} {...args}>
              {copy}
            </HeadingComponent>
          </Flex>
        ))}
      </Stack>
    ))}
  </Stack>
);

export const Guild: Story = {
  render: (args) => <HeadingStoryContent {...args} />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: (args) => <HeadingStoryContent {...args} />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
