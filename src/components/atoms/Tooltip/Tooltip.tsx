import React from 'react';
import { ChakraTooltip, ChakraTooltipProps } from '../../chakra';

type TooltipProps = ChakraTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({
  label,
  placement = 'top',
  children,
  ...props
}: TooltipProps) => (
  <ChakraTooltip label={label} placement={placement} {...props}>
    {children}
  </ChakraTooltip>
);

export default Tooltip;
