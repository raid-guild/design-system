import React from 'react';
import { Box } from '../chakra';

export interface SidePanelProps {
  /**
   * Objects to render in pabel
   */
  children?: any;
}

/**
 * Primary UI component for user interaction
 */
export const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  return (
    <Box as="section" minH="100vh">
      {children}
    </Box>
  );
};
