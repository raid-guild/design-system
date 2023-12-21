import React from 'react';
import { StoryFn } from '@storybook/react';
import { Tooltip as TooltipComponent, Button } from '../..';

export default {
  title: 'Components/Atoms/Tooltip',
  component: TooltipComponent,
} as any; // as Meta<typeof TooltipComponent>;

const Tooltip: StoryFn<typeof TooltipComponent> = () => (
  <TooltipComponent
    label="Reason you can't click"
    placement='end'
    shouldWrapChildren
    hasArrow
  >
    <Button isDisabled>Can&apos;t Click</Button>
  </TooltipComponent>
);

export { Tooltip };
