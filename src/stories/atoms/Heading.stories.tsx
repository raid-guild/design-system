import { Story } from '@storybook/react';
import React from 'react';
import {
  Heading as HeadingComponent,
  HeadingProps,
  Stack,
  Flex,
  Text,
} from '../..';

export default {
  title: 'Components/Atoms/Heading',
  component: HeadingComponent,
};

const headingExamples: Array<{ size: string }> = [
  { size: '4xl' },
  { size: '3xl' },
  { size: '2xl' },
  { size: 'xl' },
  { size: 'lg' },
  { size: 'md' },
  { size: 'sm' },
];

const headingVariants = ['shadow', 'noShadow'];

const copy = 'RaidGuild vs Moloch';

const Heading: Story<HeadingProps> = (args) => (
  <Stack spacing={4}>
    {/* Map out each size */}
    {headingExamples.map((example) => (
      <Stack spacing={2} key={example.size}>
        {/* Add both variants */}
        {headingVariants.map((variant: any) => (
          <Flex align='center' key={`${example.size}-${variant}`}>
            <Text mr={3}>{`${example.size} - ${variant}`}</Text>
            <HeadingComponent size={example.size} variant={variant} {...args}>
              {copy}
            </HeadingComponent>
          </Flex>
        ))}
      </Stack>
    ))}
  </Stack>
);

export { Heading };
