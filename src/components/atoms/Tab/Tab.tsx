import React from 'react';
import { Tab, TabProps } from '@chakra-ui/react';

const TabComponent: React.FC<TabProps> = ({ children, ...props }) => (
  <Tab
    _selected={{ color: 'primary.500', borderBottomColor: 'primary.500' }}
    fontFamily='texturina'
    {...props}
  >
    {children}
  </Tab>
);

export default TabComponent;
