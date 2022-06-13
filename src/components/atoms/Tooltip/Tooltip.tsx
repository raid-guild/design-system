import React from 'react';
import { ChakraTooltip, ChakraTooltipProps } from '../../chakra';

type TooltipProps = ChakraTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({
  label,
  placement,
  shouldWrapChildren,
  children,
  ...props
}: TooltipProps) => {
  return (
    <ChakraTooltip
      label={label}
      placement={placement}
      shouldWrapChildren={shouldWrapChildren}
      {...props}
    >
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
