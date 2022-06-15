import React from 'react';
import { ChakraTooltip, ChakraTooltipProps, useTheme } from '../../chakra';

type TooltipProps = ChakraTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({
  label,
  placement,
  shouldWrapChildren,
  children,
  ...props
}: TooltipProps) => {
  const theme = useTheme();
  console.log(theme.components.Spinner);

  return (
    <ChakraTooltip
      label={label}
      placement={placement}
      shouldWrapChildren={shouldWrapChildren}
      background='gray.200'
      color='gray.800'
      {...props}
    >
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
