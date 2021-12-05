import { ChakraText, TextProps } from 'components/chakra';
import * as React from 'react';

const Copyright = (props: TextProps) => (
  <ChakraText fontSize='sm' {...props}>
    &copy; {new Date().getFullYear()} Raid Guild, DAO. All rights reserved.
  </ChakraText>
);

export default Copyright;
