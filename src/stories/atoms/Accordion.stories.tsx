import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
  defaultTheme,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Atoms/Accordion',
  component: AccordionComponent,
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
} as Meta<typeof AccordionComponent>;
type Story = StoryObj<typeof AccordionComponent>;

// eslint-disable-next-line max-len
// TODO this could be abstracted to its own component, but just added the style to the default chakra component for now

const AccordionStoryContent = () => (
  <AccordionComponent allowToggle>
    <AccordionItem>
      <AccordionButton justifyContent='space-between'>
        <Heading size='md'>Open 1</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel bg='whiteAlpha.100'>
        <Text>Content 1</Text>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton justifyContent='space-between'>
        <Heading size='md'>Open 2</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel bg='whiteAlpha.100'>
        <Text>Content 2</Text>
      </AccordionPanel>
    </AccordionItem>
  </AccordionComponent>
);

export const Guild: Story = {
  render: () => <AccordionStoryContent />,
  name: 'RaidGuild',
  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <AccordionStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
