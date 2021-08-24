import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ButtonGroup,
  ButtonGroupProps,
} from '../../src';

export default {
  title: 'Components/ButtonGroup',
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

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

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
