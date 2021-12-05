import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaMedium, FaTwitter } from 'react-icons/fa';

const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      as='a'
      href='https://github.com/raid-guild'
      aria-label='GitHub'
      icon={<FaGithub fontSize='24px' />}
    />
    <IconButton
      as='a'
      href='https://twitter.com/raidguild'
      aria-label='Twitter'
      icon={<FaTwitter fontSize='24px' />}
    />
    <IconButton
      as='a'
      href='https://medium.com/raid-guild'
      aria-label='Medium'
      icon={<FaMedium fontSize='24px' />}
    />
  </ButtonGroup>
);

export default SocialMediaLinks;
