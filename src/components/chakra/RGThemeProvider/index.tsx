import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../../theme/index';

interface RGThemeProps {
  children: any;
}

const RGThemeProvider: React.FC<RGThemeProps> = ({
  children,
}: RGThemeProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
};

export default RGThemeProvider;
