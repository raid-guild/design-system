import { Box, useStyleConfig } from '@chakra-ui/react';
import * as React from 'react';

export function Card(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Card', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
}
