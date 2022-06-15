import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type { ComponentStory } from '@storybook/react';
import { Toast as ToastComponent, Button, useToast, Stack } from '../..';

export default {
  title: 'Components/Atoms/Toast',
  component: ToastComponent,
} as ComponentMeta<typeof ToastComponent>;

const Toast: ComponentStory<typeof ToastComponent> = () => {
  const toast = useToast();

  const sendToast = ({ title, description, type, iconName }: any) => {
    toast({
      position: 'top-right',
      render: () => (
        <ToastComponent
          title={title}
          description={description}
          type={type}
          iconName={iconName}
        />
      ),
    });
  };

  const clickSuccessToast = () => {
    sendToast({
      title: '123 test',
      description: 'With a description',
      type: 'success',
      iconName: 'crown',
    });
  };

  const clickErrorToast = () => {
    sendToast({
      title: '123 Error test',
      description: 'With a description',
      type: 'error',
      iconName: 'alert',
    });
  };

  const clickInfoToast = () => {
    sendToast({
      title: '123 info test',
      description: 'With a description',
      type: 'info',
      iconName: 'warning',
    });
  };

  return (
    <Stack w='150px'>
      <Button onClick={clickSuccessToast}>Success</Button>
      <Button onClick={clickErrorToast}>Error</Button>
      <Button onClick={clickInfoToast}>Info</Button>
    </Stack>
  );
};

export { Toast };
