import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import {
  AlertDialog as AlertDialogComponent,
  Button,
  Box,
  useDisclosure,
} from '../..';

export default {
  title: 'Components/Molecules/Alert Dialog',
  component: AlertDialogComponent,
} as ComponentMeta<typeof AlertDialogComponent>;

const AlertDialog: ComponentStory<typeof AlertDialogComponent> = () => {
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

export { AlertDialog };
