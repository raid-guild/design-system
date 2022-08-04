import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
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
      {children}
    </ChakraProvider>
  );
};

export default RGThemeProvider;
