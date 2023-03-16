import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ListItemProps } from 'components/atoms/List/List';
import {
  List as ListComponent,
  HStack,
  Stack,
  Heading,
  defaultTheme,
  clientTheme,
} from '../..';
import Castle from '../../components/icons/Castle';

export default {
  title: 'Components/Atoms/List',
  component: ListComponent,
} as Meta<typeof ListComponent>;
type Story = StoryObj<typeof ListComponent>;

type ListEntry = Partial<ListItemProps> & {
  name: string;
  ordered?: boolean;
};

const ListStoryContent = () => {
  const listItems = ['lorem ipsum 1', 'lorem ipsum 2', 'lorem ipsum 3'];

  const listVariants: ListEntry[] = [
    { name: 'Standard Unordered', withSwords: false },
    { name: 'Ordered', ordered: true },
    { name: 'With Swords Icon', withSwords: true },
    { name: 'Custom Icon', icon: Castle },
  ];

  return (
    <HStack>
      {listVariants.map((variant) => (
        <Stack w='300px' align='center' key={variant.name.replace(/ /g, '')}>
          <Heading size='sm'>{variant.name}</Heading>
          <ListComponent
            listItems={listItems}
            ordered={variant.ordered}
            withSwords={variant.withSwords}
            icon={variant.icon}
          />
        </Stack>
      ))}
    </HStack>
  );
};

export const Guild: Story = {
  render: () => <ListStoryContent />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <ListStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
