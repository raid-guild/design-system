import { ColorProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { AiTwotoneCrown, AiFillWarning, AiFillAlert } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { RiRocket2Fill } from 'react-icons/ri';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { Box, HStack, Icon, AlertStatus, ChakraToastProps } from '../../chakra';

type CustomToastProps = {
  status: AlertStatus;
  title: string | ReactNode;
  description?: string | ReactNode;
  icon?: IconType;
  iconName?: string;
  iconColor?: string;
  toast?: any;
  close?: any;
  isCloseable?: boolean;
};

export type ToastProps = ChakraToastProps & CustomToastProps;

const icons: {
  [name: string]: { icon: IconType; color: ColorProps['color'] };
} = {
  crown: { icon: AiTwotoneCrown, color: 'red.500' },
  warning: { icon: AiFillWarning, color: 'whiteAlpha.700' },
  alert: { icon: AiFillAlert, color: 'whiteAlpha.800' },
  bell: { icon: BsBellFill, color: 'blackAlpha.700' },
  rocket: { icon: RiRocket2Fill, color: 'whiteAlpha.800' },
};

const bgValues = {
  success: {
    bg: 'gray.800',
    bgImage:
      'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)',
    displayBorder: 'block',
  },
  error: {
    bg: 'red.500',
    bgImage: '',
    displayBorder: 'none',
  },
  info: {
    bg: 'blue.500',
    bgImage: 'whiteAlpha.700',
    displayBorder: 'block',
  },
  warning: {
    bg: 'blue.500',
    bgImage: 'whiteAlpha.700',
    displayBorder: 'block',
  },
  loading: {
    bg: 'blue.500',
    bgImage: 'whiteAlpha.700',
    displayBorder: 'block',
  },
};

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  status = 'success',
  icon,
  iconName,
  iconColor,
}: ToastProps) => {
  return (
    <Box
      bg={bgValues[status].bg}
      position='relative'
      borderRadius='15px'
      padding={4}
    >
      <HStack spacing={3}>
        {iconName ? (
          <Icon
            as={icons[iconName].icon}
            color={iconColor || icons[iconName].color || 'whiteAlpha.800'}
            width='35px'
            height='35px'
          />
        ) : (
          icon && <Icon as={icon} width='35px' height='35px' />
        )}
        <Box>
          <Heading size='md'>{title}</Heading>
          {description && <Text size='sm'>{description}</Text>}
        </Box>
      </HStack>

      {/* {isCloseable && (
        <Box position='absolute' top='10px' right='10px' onClick={close}>
          <Icon as={RiCloseFill} onClick={close} w='25px' h='25px' />
        </Box>
      )} */}

      <Box
        display={bgValues[status].displayBorder}
        top='-2px'
        left='-2px'
        width='104%'
        height='104%'
        bgImage={bgValues[status].bgImage}
        filter='blur(10px)'
        position='absolute'
        zIndex={-1}
      />
    </Box>
  );
};
export default Toast;
