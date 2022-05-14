import React from 'react';
import { ChakraProvider, theme as defaultTheme } from '@chakra-ui/react';
import theme from '../../../theme/index';

interface RGThemeProps {
  children: any;
}

const RGThemeProvider: React.FC<RGThemeProps> = ({
  children,
}: RGThemeProps) => {
  console.log(defaultTheme);
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
};

export default RGThemeProvider;
