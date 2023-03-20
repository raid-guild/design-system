import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Modal as ModalComponent,
  Button,
  Box,
  useDisclosure,
  Text,
  defaultTheme,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Molecules/Modal',
  component: ModalComponent,
} as Meta<typeof ModalComponent>;
type Story = StoryObj<typeof ModalComponent>;

const Template = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = () => {
    console.log('submitted');
  };

  const buttons = [
    { label: 'Cancel', onClick: onClose, isPrimary: false },
    { label: 'Submit', onClick: submit, isPrimary: true },
  ];

  return (
    <Box>
      <Button onClick={onOpen}>Test it out</Button>

      <ModalComponent
        heading='testing 123'
        buttons={buttons}
        isOpen={isOpen}
        onClose={onClose}
      >
        <Text>blah blah blah</Text>
      </ModalComponent>
    </Box>
  );
};

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
