import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '../..';

export default {
  title: 'Components/Atoms/Accordion',
  component: AccordionComponent,
} as ComponentMeta<typeof AccordionComponent>;

const Accordion: ComponentStory<typeof AccordionComponent> = () => (
  <AccordionComponent allowToggle>
    <AccordionItem>
      <AccordionButton justifyContent='space-between'>
        <Text>Open 1</Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>Content 1</AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionButton justifyContent='space-between'>
        <Text>Open 2</Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>Content 2</AccordionPanel>
    </AccordionItem>
  </AccordionComponent>
);

export { Accordion };
