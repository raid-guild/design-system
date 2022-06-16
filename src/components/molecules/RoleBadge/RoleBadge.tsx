import React from 'react';
import { Image } from '../../chakra';
import { roleImage } from './roleImages';

interface RoleBadgeProps {
  roleName: string;
  width?: number | string;
  height?: number | string;
}

const RoleBadge: React.FC<RoleBadgeProps> = ({
  roleName,
  width = '150px',
  height = '150px',
}: RoleBadgeProps) => {
  return <Image src={roleImage[roleName]} width={width} height={height} />;
};

export default RoleBadge;
