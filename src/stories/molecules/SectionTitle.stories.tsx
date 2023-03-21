import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { SectionTitle as SectionTitleComponent, Stack } from '../..';

export default {
  title: 'Components/Molecules/Section Title',
  component: SectionTitleComponent,
} as Meta;

const SectionTitle: StoryFn<typeof SectionTitleComponent> = () => (
  <Stack justify='center' my={100}>
    <SectionTitleComponent title='The Adventure Awaits' />
    <SectionTitleComponent />
  </Stack>
);

export { SectionTitle };
