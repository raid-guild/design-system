import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button as ButtonComponent, Flex, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/Buttons',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const buttonVariants = [
  { name: 'Solid', variant: 'solid' },
  { name: 'Outline', variant: 'outline' },
  { name: 'Ghost', variant: 'ghost' },
];

const Buttons: ComponentStory<typeof ButtonComponent> = () => (
  <Stack>
    {buttonVariants.map((button) => (
      <Flex width='250px' justify='space-between'>
        <Text size='lg'>{button.name}</Text>
        <ButtonComponent variant={button.variant} width='150px'>
          Let&apos;s Go
        </ButtonComponent>
      </Flex>
    ))}
  </Stack>
);

export { Buttons };
