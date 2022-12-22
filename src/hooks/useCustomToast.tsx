import React, { useRef } from 'react';
import _ from 'lodash';
import {
  useToast as useChakraToast,
  AlertStatus,
  ToastId,
  CreateToastFnReturn,
} from '@chakra-ui/react';
import { Toast, ToastProps } from '../components/atoms';

const ToastBase = ({
  toast,
  title,
  description,
  iconName,
  status,
  id,
  duration,
  closeToast,
  ...props // gets the rest of the original Chakra Toast props (such as isClosable)
}: ToastProps & {
  status: AlertStatus;
  toast: Partial<CreateToastFnReturn>;
}) => {
  return toast({
    title,
    description,
    status,
    id,
    duration: duration ?? 3000,
    position: 'top-right',
    ...props,
    render: () => (
      <Toast
        title={_.toString(title) || ''}
        description={description}
        iconName={iconName}
        status={status}
        closeToast={closeToast}
        {...props}
      />
    ),
  });
};

const useCustomToast = () => {
  const toast = useChakraToast();
  const toastIdRef = useRef<ToastId | null>(null);

  function closeToast() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  return {
    success(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'success',
        closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    error(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'error',
        closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    warning(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'warning',
        closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    loading(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'loading',
        closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
    info(props: Omit<ToastProps, 'status'>) {
      toastIdRef.current = ToastBase({
        ...props,
        status: 'info',
        closeToast,
        isClosable: props.isClosable ?? true,
        toast,
      });
    },
  };
};

export default useCustomToast;
