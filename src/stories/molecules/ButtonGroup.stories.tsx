import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ButtonGroup } from '../..';

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    isAttached: { control: 'boolean' },
    // buttons: {
    //   options: ['One', 'Two', 'Three', 'Four'],
    //   control: { type: 'check' },
    // },
    spacing: { control: 'number' },
    size: { options: ['xs', 'sm', 'md', 'lg'], control: { type: 'radio' } },
  },
} as Meta;

const Template: StoryFn<any> = ({
  buttons,
  ...args
}: {
  buttons: string[];
}) => <ButtonGroup buttons={buttons} onSelect={() => null} {...args} />;

export const Attached = Template.bind({});
Attached.args = {
  buttons: ['Tic', 'Tac', 'Toe'],
  isAttached: true,
};

export const Spaced = Template.bind({});
Spaced.args = {
  buttons: ['Pinapple', 'Pen'],
  isAttached: false,
};
