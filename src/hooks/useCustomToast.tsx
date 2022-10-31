import React from 'react';
import _ from 'lodash';
import { useToast as useChakraToast } from '@chakra-ui/react';
import { Toast, ToastProps } from '../components/atoms';

const ToastBase = ({
  toast,
  title,
  description,
  iconName,
  status,
  id,
  duration,
  isClosable,
  close,
}: ToastProps) => {
  toast({
    title,
    description,
    status,
    id,
    duration: duration ?? 3000,
    position: 'top-right',
    render: () => (
      <Toast
        title={_.toString(title) || ''}
        description={description}
        iconName={iconName}
        status={status}
        isCloseable={isClosable}
        close={close}
      />
    ),
  });
};

const useCustomToast = () => {
  const toast = useChakraToast();

  return {
    success(props: ToastProps) {
      ToastBase({ ...props, status: 'success', toast });
    },
    error(props: ToastProps) {
      ToastBase({ ...props, status: 'error', toast });
    },
    warning(props: ToastProps) {
      ToastBase({ ...props, status: 'warning', toast });
    },
    loading(props: ToastProps) {
      ToastBase({ ...props, status: 'loading', toast });
    },
    info(props: ToastProps) {
      ToastBase({ ...props, status: 'info', toast });
    },
  };
};

export default useCustomToast;
