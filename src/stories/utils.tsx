/* eslint-disable react/jsx-no-useless-fragment */
import React, { PropsWithChildren, useContext } from 'react';

export const StoryBookThemeContext = React.createContext<{
  theme: 'client' | 'guild';
}>({ theme: 'guild' });

export const useCurrentTheme = () => {
  const { theme } = useContext(StoryBookThemeContext);
  return theme;
};

export const RaidGuildThemeOnly = ({ children }: PropsWithChildren) => {
  const theme = useCurrentTheme();

  if (theme !== 'guild') {
    return null;
  }

  return <>{children}</>;
};

export const ClientThemeOnly = ({ children }: PropsWithChildren) => {
  const theme = useCurrentTheme();

  if (theme !== 'client') {
    return null;
  }

  return <>{children}</>;
};
