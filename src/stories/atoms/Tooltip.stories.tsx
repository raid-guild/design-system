import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip as TooltipComponent, Button } from '../..';

export default {
  title: 'Components/Atoms/Tooltip',
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

const Tooltip: ComponentStory<typeof TooltipComponent> = () => (
  <TooltipComponent
    label="Reason you can't click"
    placement='end'
    shouldWrapChildren
    hasArrow
  >
    <Button>Can&apos;t Click</Button>
  </TooltipComponent>
);

export { Tooltip };
