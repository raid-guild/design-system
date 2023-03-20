import React from 'react';
import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import {
  clientTheme,
  defaultTheme,
  Modal as ModalComponent,
  SectionTitle as SectionTitleComponent,
  Stack,
} from '../..';

export default {
  title: 'Components/Molecules/Section Title',
  component: SectionTitleComponent,
} as Meta;
type Story = StoryObj<typeof ModalComponent>;
const Template = () => (
  <Stack justify='center' my={100}>
    <SectionTitleComponent title='The Adventure Awaits' />
    <SectionTitleComponent />
  </Stack>
);

export const Guild: Story = {
  render: () => <Template />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <Template />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
