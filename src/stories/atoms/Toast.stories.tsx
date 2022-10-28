import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Toast as ToastComponent,
  Button,
  useCustomToast,
  Stack,
  ToastProvider,
} from '../..';

export default {
  title: 'Components/Atoms/Toast',
  component: ToastComponent,
} as Meta<typeof ToastComponent>;

const Toast: StoryFn = () => {
  const toast = useCustomToast();

  const clickSuccessToast = () => {
    toast.success({
      id: 456,
      title: '123 test',
      description: 'With a description',
      status: 'success',
      iconName: 'crown',
      isClosable: true,
    });
  };

  const clickErrorToast = () => {
    toast.error({
      id: 123,
      title: '123 Error test',
      description: 'With a description',
      status: 'error',
      iconName: 'alert',
      isClosable: true,
    });
  };

  const clickInfoToast = () => {
    toast.info({
      title: '123 info test',
      description: 'With a description',
      status: 'info',
      iconName: 'warning',
      isClosable: true,
    });
  };

  return (
    <ToastProvider>
      <Stack w='150px'>
        <Button onClick={clickSuccessToast}>Success</Button>
        <Button onClick={clickErrorToast}>Error</Button>
        <Button onClick={clickInfoToast}>Info</Button>
      </Stack>
    </ToastProvider>
  );
};

export { Toast };
