import React from 'react';
import { Flex } from '../../chakra';
import { roleImage } from './roleImages';

export interface RoleBadgeProps {
  roleName: string;
  width?: number | string;
  height?: number | string;
  border?: string;
}

const RoleBadge: React.FC<RoleBadgeProps> = ({
  roleName,
  width = '200px',
  height = '200px',
  border,
}: RoleBadgeProps) => {
  const Icon = roleImage[roleName].img;

  return (
    <Flex
      borderRadius='100px'
      w={width}
      h={height}
      bg='black'
      border={border || '5px solid'}
      borderColor={roleImage[roleName].color}
      align='center'
      justify='center'
    >
      <Icon width='70%' height='70%' />
    </Flex>
  );
};

export default RoleBadge;
