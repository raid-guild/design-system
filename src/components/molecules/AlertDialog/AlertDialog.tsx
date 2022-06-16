import React from 'react';
import {
  ChakraAlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCloseButton,
  Button,
  HStack,
} from '../../chakra';
import { Text } from '../../atoms/Text';
import { Heading } from '../../atoms/Heading';

export interface AlertDialogProps {
  heading: string;
  body: string;
  buttons: Array<{
    label: string;
    onClick: () => any;
    isCancel: boolean;
    isPrimary: boolean;
  }>;
  isOpen: boolean;
  onClose: () => any;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  heading,
  body,
  buttons,
  isOpen,
  onClose,
}) => {
  const cancelRef: any = React.useRef();

  return (
    <ChakraAlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size='lg'>{heading}</Heading>
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Text>{body}</Text>
        </AlertDialogBody>
        <AlertDialogFooter justifyContent='flex-end'>
          <HStack spacing={3} mx={3}>
            {buttons.map((btn) => (
              <Button
                ref={btn.isCancel ? cancelRef : undefined}
                onClick={btn.onClick}
                variant={btn.isPrimary ? 'solid' : 'outline'}
                key={btn.label}
              >
                {btn.label}
              </Button>
            ))}
          </HStack>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ChakraAlertDialog>
  );
};

export default AlertDialog;
