import React from 'react';
import { StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Switch as SwitchComponent, Stack } from '../..';

export default {
  title: 'Components/Forms/Switch/HookForm',
  component: SwitchComponent,
}; // as Meta<typeof SwitchComponent>;

// const switchSizes = [
//   { name: 'Small', size: 'sm' },
//   { name: 'Medium', size: 'md' },
//   { name: 'Large', size: 'lg' },
// ];

const Switch: StoryFn<typeof SwitchComponent> = () => {
  const localForm = useForm();

  return (
    <Stack spacing='20px'>
      {/* {switchSizes.map((switch) => (
      <SwitchComponent size={switch.size} colorScheme='green' label={switch.name} />
    ))} */}
      <SwitchComponent
        size='sm'
        colorScheme='green'
        label='Small'
        name='small'
        localForm={localForm}
      />
      <SwitchComponent
        size='md'
        colorScheme='green'
        label='Medium'
        name='medium'
        localForm={localForm}
      />
      <SwitchComponent
        size='lg'
        colorScheme='green'
        label='Large'
        name='large'
        localForm={localForm}
      />
    </Stack>
  );
};

export { Switch };
