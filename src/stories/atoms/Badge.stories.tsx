import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Badge as BadgeComponent, Stack, HStack } from '../..';

export default {
  title: 'Components/Atoms/Badge',
  component: BadgeComponent,
} as ComponentMeta<typeof BadgeComponent>;

const badgeColors = [
  { name: 'Default', color: 'gray' },
  { name: 'Red', color: 'red' },
  { name: 'Raid Guild Red', color: 'primary' },
  { name: 'Green', color: 'green' },
];

const badgeVariants = ['outline', 'solid', 'subtle'];

const Badge: ComponentStory<typeof BadgeComponent> = () => (
  <Stack>
    {badgeColors.map((b) => (
      <HStack key={b.name}>
        {badgeVariants.map((variant: string) => (
          <BadgeComponent
            colorScheme={b.color}
            variant={variant}
            key={`${b.name} - ${variant}`}
          >
            {`${b.name} - ${variant}`}
          </BadgeComponent>
        ))}
      </HStack>
    ))}
  </Stack>
);

export { Badge };
