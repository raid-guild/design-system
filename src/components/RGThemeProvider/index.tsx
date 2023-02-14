import React, { ReactNode } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import RaidGuildTheme from '../../theme/index';
import Fonts from './Fonts';

interface RGThemeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme?: Record<string, any>;
  fonts?: ReactNode;
  colorModeScript?: ReactNode;
  children: ReactNode;
}

/**
 * This theme provider is having trouble. Gives blank page when used.
 *
 * Import the components separately for the time being.
 *
 */
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
      {children}
    </ChakraProvider>
  );
};

export default RGThemeProvider;

export { Fonts };
