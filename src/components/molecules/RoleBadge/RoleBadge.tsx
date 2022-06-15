import React from 'react';
import { Image } from '../../chakra';
import { roleImage } from './roleImages';

interface RoleBadgeProps {
  role: string;
  width?: number | string;
  height?: number | string;
}

const RoleBadge: React.FC<RoleBadgeProps> = ({
  role,
  width = '150px',
  height = '150px',
}: RoleBadgeProps) => {
  return <Image src={roleImage[role]} width={width} height={height} />;
};

export default RoleBadge;
