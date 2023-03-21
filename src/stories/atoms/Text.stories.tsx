import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Text as TextComponent, Stack, Flex } from '../..';

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
} as Meta;

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

const Text: StoryFn<typeof TextComponent> = (args) => (
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

export { Text };
