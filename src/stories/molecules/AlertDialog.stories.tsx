import React from 'react';
import { StoryFn } from '@storybook/react';
import {
  AlertDialog as AlertDialogComponent,
  Button,
  Box,
  useDisclosure,
} from '../..';

export const AlertDialog: StoryFn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = () => {
    // eslint-disable-next-line no-console
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

export default {
  title: 'Components/Molecules/Alert Dialog',
  component: AlertDialogComponent,
}; // as Meta;
