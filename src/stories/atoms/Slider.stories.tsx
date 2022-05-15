import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider as SliderComponent, Flex, Stack, Heading } from '../..';

export default {
  title: 'Components/Atoms/Slider',
  component: SliderComponent,
} as ComponentMeta<typeof SliderComponent>;

const markValues = [
  { label: '$1000', value: 1000 },
  { label: '$10,000', value: 10000 },
];

const Slider: ComponentStory<typeof SliderComponent> = () => (
  <Stack as={Flex} w='50%' spacing={8} justify='center'>
    <Heading textAlign='center'>Select your budget</Heading>
    <SliderComponent
      label='slider-ex-1'
      markValues={markValues}
      min={1000}
      max={10000}
      step={1000}
      defaultValue={3000}
      withToolTip
    />
  </Stack>
);

export { Slider };
