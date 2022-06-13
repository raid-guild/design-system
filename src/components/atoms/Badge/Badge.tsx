import React from 'react';
import { ChakraBadge, ChakraBadgeProps } from '../../chakra';

type BadgeProps = ChakraBadgeProps;

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return <ChakraBadge {...props}>{children}</ChakraBadge>;
};

export default Badge;
