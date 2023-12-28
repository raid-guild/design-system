import React from 'react';
import { StoryFn } from '@storybook/react';
import { Flex, Heading } from '@chakra-ui/react';
import {
  Tabs as TabsComponent,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '../..';

const tabVariants = [
  { name: 'Unstyled', variant: 'unstyled' },
  { name: 'Default', variant: 'default' },
];

export default {
  title: 'Components/Atoms/Tabs',
  component: TabsComponent,
} as any; // as Meta<typeof TabsComponent>;

const Tabs: StoryFn<typeof TabsComponent> = () => (
  <>
    {tabVariants.map((tab) => (
      <Flex align='center' key={tab.variant} justify='space-between' w='300px'>
        <Heading size='sm'>{tab.name}</Heading>
        <TabsComponent variant={tab.variant}>
          <TabList>
            <Tab>Test 1</Tab>
            <Tab>Test 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
          </TabPanels>
        </TabsComponent>
      </Flex>
    ))}
  </>
);

export { Tabs };
