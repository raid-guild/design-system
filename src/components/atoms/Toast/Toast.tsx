import React from 'react';
import { Text } from '../Text';
import { Box } from '../../chakra';

export interface ToastProps {
  title: string;
  description?: string;
  type: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type,
}: ToastProps) => {
  const bgValue = type === 'success' ? 'gradient' : 'red.500';

  return (
    <Box bg={bgValue}>
      <Text>{title}</Text>
      {description && <Text>{description}</Text>}
    </Box>
  );
};

export default Toast;
