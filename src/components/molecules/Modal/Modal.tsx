import React from 'react';
import {
  ChakraModal,
  ChakraModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  HStack,
} from '../../chakra';
import { Heading } from '../../atoms';

export interface ModalProps extends ChakraModalProps {
  heading: string;
  buttons: Array<{
    label: string;
    onClick: () => any;
    isPrimary: boolean;
  }>;
  isOpen: boolean;
  onClose: () => any;
}

const Modal: React.FC<ModalProps> = ({
  heading,
  buttons,
  children,
  isOpen,
  onClose,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {heading && (
          <ModalHeader>
            <Heading>{heading}</Heading>
          </ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <HStack spacing={3} mx={3}>
            {buttons.map((btn) => (
              <Button
                colorScheme='blue'
                mr={3}
                variant={btn.isPrimary ? 'solid' : 'outline'}
                onClick={btn.onClick}
                key={btn.label}
              >
                {btn.label}
              </Button>
            ))}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
