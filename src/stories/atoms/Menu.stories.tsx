import type { StoryFn } from '@storybook/react';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import {
  Menu as MenuComponent,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Icon,
} from '../..';

export const Menu: StoryFn = () => {
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

Menu.args = {
  size: 150,
};

export default {
  title: 'Components/Atoms/Menu',
}; // as Meta;
