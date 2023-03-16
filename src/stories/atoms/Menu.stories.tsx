import type { Meta } from '@storybook/react';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { StoryObj } from '@storybook/react';
import {
  Menu as MenuComponent,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Icon,
  defaultTheme,
  clientTheme,
} from '../..';

const MenuStoryContent = () => {
  return (
    <MenuComponent>
      <MenuButton>
        <Flex w='100%' justify='space-between' align='center'>
          <Text>Menu</Text>
          <Icon as={FaCaretDown} color='red.500' w='20px' h='20px' />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Test</MenuItem>
      </MenuList>
    </MenuComponent>
  );
};

const args = {
  size: 150,
};

export default {
  title: 'Components/Atoms/Menu',
  args,
  component: MenuComponent,
} as Meta;
type Story = StoryObj<typeof MenuComponent>;

export const Guild: Story = {
  render: () => <MenuStoryContent />,
  name: 'RaidGuild',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <MenuStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
