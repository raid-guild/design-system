import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
} from '../..';

export default {
  title: 'Components/Atoms/Accordion',
  component: AccordionComponent,
} as Meta<typeof AccordionComponent>;

// eslint-disable-next-line max-len
// TODO this could be abstracted to its own component, but just added the style to the default chakra component for now

const Accordion: StoryFn<typeof AccordionComponent> = () => (
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

export { Accordion };
