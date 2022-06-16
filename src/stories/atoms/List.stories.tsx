import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { List as ListComponent, HStack, Stack, Heading } from '../..';
import Castle from '../../components/icons/Castle';

export default {
  title: 'Components/Atoms/List',
  component: ListComponent,
} as ComponentMeta<typeof ListComponent>;

const List: ComponentStory<typeof ListComponent> = () => {
  const listItems = ['lorem ipsum 1', 'lorem ipsum 2', 'lorem ipsum 3'];

  const listVariants: any[] = [
    { name: 'Standard Unordered', withSwords: false },
    { name: 'Ordered', ordered: true },
    { name: 'With Swords Icon', withSwords: true },
    { name: 'Custom Icon', icon: Castle },
  ];

  return (
    <HStack>
      {listVariants.map((variant) => (
        <Stack w='300px' align='center'>
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

export { List };
