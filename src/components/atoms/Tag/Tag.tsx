import React from 'react';
import { ChakraTag, ChakraTagProps } from '../../chakra';

interface CustomTagProps {
  label?: string;
}

export type TagProps = CustomTagProps & ChakraTagProps;

const Tag: React.FC<TagProps> = ({ label, children, ...props }: TagProps) => (
  <ChakraTag {...props}>{label || children}</ChakraTag>
);

export default Tag;
