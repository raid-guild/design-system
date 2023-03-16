import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Tabs as TabsComponent,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  clientTheme,
  defaultTheme,
} from '../..';

export default {
  title: 'Components/Atoms/Tabs',
  component: TabsComponent,
} as Meta<typeof TabsComponent>;
type Story = StoryObj<typeof TabsComponent>;

const TabsStoryContent = () => (
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
export const Guild: Story = {
  render: () => <TabsStoryContent />,
  name: 'RaidGuild',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <TabsStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
