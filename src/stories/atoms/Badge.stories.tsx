import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge as BadgeComponent, Stack, HStack } from '../..';

export default {
  title: 'Components/Atoms/Badge',
  component: BadgeComponent,
} as ComponentMeta<typeof BadgeComponent>;

const badgeColors = [
  { name: 'Default', color: '' },
  { name: 'Red', color: 'red' },
  { name: 'Green', color: 'green' },
];

const badgeVariants = ['outline', 'solid', 'subtle'];

const Badge: ComponentStory<typeof BadgeComponent> = () => (
  <Stack>
    {badgeColors.map((b) => (
      <HStack>
        {badgeVariants.map((variant: string) => (
          <BadgeComponent colorScheme={b.color} variant={variant}>
            {b.name}
          </BadgeComponent>
        ))}
      </HStack>
    ))}
  </Stack>
);

export { Badge };
