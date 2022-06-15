import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof AccordionComponent>;

const Accordion: ComponentStory<typeof AccordionComponent> = () => (
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
