import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Tabs as TabsComponent,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '../..';

export default {
  title: 'Components/Atoms/Tabs',
  component: TabsComponent,
} as Meta<typeof TabsComponent>;

const Tabs: StoryFn<typeof TabsComponent> = () => (
  <TabsComponent>
    <TabList>
      <Tab>Test 1</Tab>
      <Tab>Test 2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
    </TabPanels>
  </TabsComponent>
);

export { Tabs };
