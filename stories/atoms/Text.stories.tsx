import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Text, TextProps } from '../../src';


export default {
  title: 'Components/Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '6xl'],
      control: { type: 'radio' },
    },
    color: { control: 'color' },
    truncated: { control: 'boolean' },
  },
} as Meta;

const content: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Paragraph = Template.bind({});
Paragraph.args = {
  size: 'md',
  content,
};

export const Truncated = Template.bind({});
Truncated.args = {
  size: 'md',
  truncated: true,
  content,
};
