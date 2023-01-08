import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  ControlledSlider as ControlledSliderComponent,
  Flex,
  Stack,
  Heading,
} from '../..';

export default {
  title: 'Components/Forms/Slider/HookForm',
  component: ControlledSliderComponent,
} as Meta<typeof ControlledSliderComponent>;

const markValues = [
  { label: '$1000', value: 1000 },
  { label: '$10,000', value: 10000 },
];

const Slider: StoryFn<typeof ControlledSliderComponent> = () => (
  <Stack as={Flex} w='50%' spacing={8} justify='center'>
    <Heading textAlign='center'>Select your budget</Heading>
    <ControlledSliderComponent
      label='slider-ex-1'
      markValues={markValues}
      min={1000}
      max={10000}
      step={1000}
      defaultValue={3000}
      withTooltip
    />
    <ControlledSliderComponent
      tooltipVariant='rainbow'
      label='slider-ex-2'
      markValues={markValues}
      min={1000}
      max={10000}
      step={1000}
      defaultValue={3000}
      withTooltip
    />
  </Stack>
);

export { Slider };
