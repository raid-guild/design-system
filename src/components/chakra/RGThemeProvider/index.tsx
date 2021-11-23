import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../../theme';

interface RGThemeProps {
  children: any;
}

export const RGThemeProvider: React.FC<RGThemeProps> = ({
  children,
}: RGThemeProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
};
