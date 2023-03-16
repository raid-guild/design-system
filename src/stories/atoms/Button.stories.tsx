import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Button as ButtonComponent,
  clientTheme,
  defaultTheme,
  Flex,
  Stack,
  Text,
} from '../..';

export default {
  title: 'Components/Atoms/Buttons',
  component: ButtonComponent,
} as Meta<typeof ButtonComponent>;
type Story = StoryObj<typeof ButtonComponent>;

const buttonVariants = [
  { name: 'Solid', variant: 'solid' },
  { name: 'Bright', variant: 'bright' },
  { name: 'Outline', variant: 'outline' },
  { name: 'Gradient Outline', variant: 'gradientOutline' },
  { name: 'Ghost', variant: 'ghost' },
];

const ButtonsStoryContent = () => (
  <Stack>
    {buttonVariants.map((button) => (
      <Flex width='400px' justify='space-between' key='variant'>
        <Text size='lg'>{button.name}</Text>
        <ButtonComponent variant={button.variant} width='150px'>
          Let&apos;s Go
        </ButtonComponent>
      </Flex>
    ))}
  </Stack>
);

export const Guild: Story = {
  render: () => <ButtonsStoryContent />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <ButtonsStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
