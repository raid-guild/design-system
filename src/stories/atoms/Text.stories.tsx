import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Text as TextComponent,
  Stack,
  Flex,
  TextProps,
  defaultTheme,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Atoms/Text',
  component: TextComponent,
  argTypes: {
    variant: {
      options: ['4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm'],
      control: { type: 'radio' },
    },
    color: { control: 'color' },
    copy: { control: { type: 'text' } },
    fontWeight: {
      control: { type: 'radio' },
    },
  },
} as Meta<typeof TextComponent>;
type Story = StoryObj<typeof TextComponent>;

const textExamples: Array<{ size: any }> = [
  { size: '4xl' },
  { size: '3xl' },
  { size: '2xl' },
  { size: 'xl' },
  { size: 'lg' },
  { size: 'md' },
  { size: 'sm' },
];

const copy = 'At the table of rounds we lay our swords.';

const TextStoryContent = (args: TextProps) => (
  <Stack spacing={3}>
    {textExamples.map((text) => (
      <Flex align='center' key={text.size}>
        <TextComponent size='md' mr={3}>
          {text.size}
        </TextComponent>
        <TextComponent size={text.size} {...args}>
          {copy}
        </TextComponent>
      </Flex>
    ))}
  </Stack>
);

export const Guild: Story = {
  render: (args) => <TextStoryContent {...args} />,
  name: 'RaidGuild',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: (args) => <TextStoryContent {...args} />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
