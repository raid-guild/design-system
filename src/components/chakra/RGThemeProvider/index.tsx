import React, { ReactNode } from 'react';
import {
  ChakraProvider,
  ColorModeScript,
  ToastProvider,
} from '@chakra-ui/react';
import RaidGuildTheme from '../../../theme/index';
import Fonts from './Fonts';

interface RGThemeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme?: Record<string, any>;
  fonts?: ReactNode;
  colorModeScript?: ReactNode;
  children: ReactNode;
}

const RGThemeProvider: React.FC<RGThemeProps> = ({
  theme,
  fonts,
  colorModeScript,
  children,
}: RGThemeProps) => {
  return (
    <ChakraProvider theme={theme || RaidGuildTheme} resetCSS>
      {colorModeScript || <ColorModeScript initialColorMode='dark' />}
      {fonts || <Fonts />}
      <ToastProvider>{children}</ToastProvider>
    </ChakraProvider>
  );
};

export default RGThemeProvider;
