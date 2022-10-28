import React from 'react';
import { ChakraProvider, ToastProvider } from '@chakra-ui/react';
import RaidGuildTheme from '../../../theme/index';

interface RGThemeProps {
  theme?: any;
  children: any;
}

const RGThemeProvider: React.FC<RGThemeProps> = ({
  theme,
  children,
}: RGThemeProps) => {
  return (
    <ChakraProvider theme={theme || RaidGuildTheme} resetCSS>
      <ToastProvider>{children}</ToastProvider>
    </ChakraProvider>
  );
};

export default RGThemeProvider;
