import { ColorProps } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { AiTwotoneCrown, AiFillWarning, AiFillAlert } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { RiRocket2Fill } from 'react-icons/ri';
import { Text, Heading } from '..';
import { Box, HStack, Icon } from '../../chakra';

export interface ToastProps {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info';
  icon?: IconType;
  iconName?: string;
  iconColor?: string;
}

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
};

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type = 'success',
  icon,
  iconName,
  iconColor,
}: ToastProps) => (
  <Box
    bg={bgValues[type].bg}
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

    <Box
      display={bgValues[type].displayBorder}
      top='-2px'
      left='-2px'
      width='104%'
      height='104%'
      bgImage={bgValues[type].bgImage}
      filter='blur(10px)'
      position='absolute'
      zIndex={-1}
    />
  </Box>
);
export default Toast;
