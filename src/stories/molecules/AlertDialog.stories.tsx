import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog as AlertDialogComponent,
  Button,
  Box,
  useDisclosure,
  defaultTheme,
  clientTheme,
} from '../..';

const AlertDialogStoryContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = () => {
    console.log('submitted');
  };

  const buttons = [
    { label: 'Cancel', onClick: onClose, isCancel: true, isPrimary: false },
    { label: 'Submit', onClick: submit, isCancel: false, isPrimary: true },
  ];

  return (
    <Box>
      <Button onClick={onOpen}>Test it out</Button>

      <AlertDialogComponent
        heading='testing 123'
        body='beep beep beep beep'
        buttons={buttons}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
export const Guild: Story = {
  render: () => <AlertDialogStoryContent />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <AlertDialogStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};

export default {
  title: 'Components/Molecules/Alert Dialog',
  component: AlertDialogComponent,
} as Meta;
type Story = StoryObj<typeof AlertDialogComponent>;
