import * as React from 'react';
import { ChakraText, TextProps } from '../chakra';

const Copyright = (props: TextProps) => (
  <ChakraText fontSize='sm' {...props}>
    &copy; {new Date().getFullYear()} Raid Guild, DAO. All rights reserved.
  </ChakraText>
);

export default Copyright;
