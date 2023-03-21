import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button as ButtonComponent, Flex, Stack, Text } from '../..';
import { RaidGuildThemeOnly } from '../utils';

export default {
  title: 'Components/Atoms/Buttons',
  component: ButtonComponent,
} as Meta<typeof ButtonComponent>;

const buttonVariants = [
  { name: 'Solid', variant: 'solid' },
  { name: 'Bright', variant: 'bright', raidGuildThemeOnly: true },
  { name: 'Outline', variant: 'outline' },
  {
    name: 'Gradient Outline',
    variant: 'gradientOutline',
    raidGuildThemeOnly: true,
  },
  { name: 'Ghost', variant: 'ghost' },
];

const Buttons: StoryFn<typeof ButtonComponent> = () => {
  return (
    <Stack>
      {buttonVariants.map((button) => {
        if (button.raidGuildThemeOnly) {
          return (
            <RaidGuildThemeOnly key={button.variant}>
              <Flex width='400px' justify='space-between' key={button.variant}>
                <Text size='lg'>{button.name}</Text>
                <ButtonComponent variant={button.variant} width='150px'>
                  Let&apos;s Go
                </ButtonComponent>
              </Flex>
            </RaidGuildThemeOnly>
          );
        }
        return (
          <Flex width='400px' justify='space-between' key={button.variant}>
            <Text size='lg'>{button.name}</Text>
            <ButtonComponent variant={button.variant} width='150px'>
              Let&apos;s Go
            </ButtonComponent>
          </Flex>
        );
      })}
    </Stack>
  );
};

export { Buttons };
