import React from 'react';
import { Flex, Heading, ChakraText, Image } from '../..';

export interface CardProps {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ title, imgSrc, text, imgAlt }) => (
  <Flex
    direction='column'
    alignItems='center'
    justifyContent='space-evenly'
    py='2rem'
    px='1.5rem'
    bg='black'
    borderTop='2px solid'
    borderColor='red'
  >
    <Heading
      variant='labels'
      fontSize={{ base: '16px' }}
      textAlign='center'
      mb={4}
    >
      {title}
    </Heading>

    <Image src={imgSrc} alt={imgAlt || imgSrc} my='1.5rem' />

    <ChakraText
      variant="textTwo"
      fontSize={{ base: '16px' }}
      textAlign='left'
    >
      {text}
    </ChakraText>
  </Flex>
);;
