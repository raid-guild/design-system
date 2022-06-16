import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import {
  Modal as ModalComponent,
  Button,
  Box,
  useDisclosure,
  Text,
} from '../..';

export default {
  title: 'Components/Molecules/Modal',
  component: ModalComponent,
} as ComponentMeta<typeof ModalComponent>;

const Modal: ComponentStory<typeof ModalComponent> = () => {
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

export { Modal };
