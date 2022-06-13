import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof TabsComponent>;

const Tabs: ComponentStory<typeof TabsComponent> = () => (
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
