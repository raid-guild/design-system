import * as React from 'react';
import { ChakraText, ChakraTextProps } from '../chakra';

const Copyright = (props: ChakraTextProps) => (
  <ChakraText fontSize='sm' {...props}>
    &copy; {new Date().getFullYear()} Raid Guild, DAO. All rights reserved.
  </ChakraText>
);

export default Copyright;
