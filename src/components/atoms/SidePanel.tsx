import React from 'react';
import { Box } from 'components/chakra';

export interface SidePanelProps {
  /**
   * Objects to render in pabel
   */
  children?: any;
}

/**
 * Primary UI component for user interaction
 */
const SidePanel: React.FC<SidePanelProps> = ({ children }) => (
  <Box as='section' minH='100vh'>
    {children}
  </Box>
);

export default SidePanel;
