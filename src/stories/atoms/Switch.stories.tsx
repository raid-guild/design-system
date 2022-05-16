import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch as SwitchComponent, Stack } from '../..';

export default {
  title: 'Components/Atoms/Switch',
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

// const switchSizes = [
//   { name: 'Small', size: 'sm' },
//   { name: 'Medium', size: 'md' },
//   { name: 'Large', size: 'lg' },
// ];

const Switch: ComponentStory<typeof SwitchComponent> = () => (
  <Stack spacing='20px'>
    {/* {switchSizes.map((switch) => (
      <SwitchComponent size={switch.size} colorScheme='green' label={switch.name} />
    ))} */}
    <SwitchComponent size='sm' colorScheme='green' label='Small' />
    <SwitchComponent size='md' colorScheme='green' label='Medium' />
    <SwitchComponent size='lg' colorScheme='green' label='Large' />
  </Stack>
);

export { Switch };
