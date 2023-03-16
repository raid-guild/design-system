import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Toast as ToastComponent,
  Button,
  useToast,
  Stack,
  defaultTheme,
  ToastProvider,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Atoms/Toast',
  component: ToastComponent,
} as Meta<typeof ToastComponent>;
type Story = StoryObj<typeof ToastComponent>;

const ToastStoryContent = () => {
  const toast = useToast();

  const clickSuccessToast = () => {
    toast.success({
      title: 'Raid Successfully Updated',
      description: 'Your Raid has been updated.',
      iconName: 'crown',
    });
  };

  const clickErrorToast = () => {
    toast.error({
      title: 'Something went wrong',
      description: 'Error updating. Please try again.',
      iconName: 'alert',
    });
  };

  const clickInfoToast = () => {
    toast.info({
      title: 'Information to Raider',
      description: 'This is an informational message.',
      iconName: 'warning',
    });
  };

  const nonClosableSuccessToast = () => {
    toast.success({
      title: 'Raid Successfully Updated',
      description: 'Your Raid has been updated.',
      iconName: 'crown',
      isClosable: false,
    });
  };

  const nonClosableErrorToast = () => {
    toast.error({
      title: 'Raid Not Updated',
      description: 'Error updating. Please try again.',
      iconName: 'alert',
      isClosable: false,
    });
  };

  const nonClosableInfoToast = () => {
    toast.info({
      title: 'Information to Raider',
      description: 'This is an informational message.',
      iconName: 'warning',
      isClosable: false,
    });
  };

  return (
    <ToastProvider>
      <Stack w='fit-content'>
        <Button onClick={clickSuccessToast}>Success</Button>
        <Button onClick={clickErrorToast}>Error</Button>
        <Button onClick={clickInfoToast}>Info</Button>
        <Button onClick={nonClosableSuccessToast}>Non-closable Success</Button>
        <Button onClick={nonClosableErrorToast}>Non-closable Error</Button>
        <Button onClick={nonClosableInfoToast}>Non-closable Info</Button>
      </Stack>
    </ToastProvider>
  );
};

export const Guild: Story = {
  render: () => <ToastStoryContent />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <ToastStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
