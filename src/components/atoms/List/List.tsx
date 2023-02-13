import React from 'react';
import {
  UnorderedList,
  OrderedList,
  ListItem,
  ListIcon,
  ChakraListProps,
  Flex,
} from '../../chakra';
import { Text } from '../Text';
import Swords from '../../icons/Swords';

export interface ListItemProps {
  _listItems: string[];
  withSwords?: boolean;
  icon?: any;
}

export interface ListProps extends ChakraListProps {
  listItems: string[];
  ordered?: boolean;
  withSwords?: boolean;
  icon?: any;
}

// TODO fix bug on ordered and unordered list style

const ListItems: React.FC<ListItemProps> = ({
  _listItems,
  withSwords,
  icon,
}) => (
  <>
    {_listItems.map((item) => (
      <ListItem as={Flex} align='center' key={item}>
        {icon ? (
          <ListIcon as={icon} color='whiteAlpha.500' />
        ) : (
          withSwords && <ListIcon as={Swords} color='red.500' />
        )}
        <Text>{item}</Text>
      </ListItem>
    ))}
  </>
);

const List: React.FC<ListProps> = ({
  listItems,
  ordered = false,
  withSwords,
  icon,
  ...props
}) => {
  if (ordered) {
    return (
      <OrderedList
        // styleType={icon || withSwords ? 'none' : 'inherit'}
        {...props}
      >
        <ListItems _listItems={listItems} withSwords={withSwords} icon={icon} />
      </OrderedList>
    );
  }

  return (
    <UnorderedList
      // styleType={icon || withSwords ? 'none' : 'disk'}
      {...props}
    >
      <ListItems _listItems={listItems} withSwords={withSwords} icon={icon} />
    </UnorderedList>
  );
};

export default List;
