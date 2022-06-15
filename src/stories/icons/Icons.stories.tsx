import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  SimpleGrid,
  Stack,
  Link,
  Icon as ChakraIcon,
} from '../../components/chakra';
import * as RootIcons from '../../components/icons';
import { Text, Heading } from '../../components/atoms';

const Template: StoryFn = (args) => {
  const { size } = args;
  return (
    <Stack align='center' spacing={7}>
      <Text size='lg'>
        Prefer{' '}
        <Link
          href='https://react-icons.github.io/react-icons/icons?name=fa'
          isExternal
          variant='withDecoration'
        >
          FontAwesome Icons{' '}
          <ChakraIcon
            as={FaExternalLinkAlt}
            width='12px'
            height='12px'
            mx={1}
          />
        </Link>{' '}
        if selecting beyond this set
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 6 }}
        gap='4rem'
        my='2rem'
        ml={{ lg: '3rem' }}
      >
        {Object.entries(RootIcons).map(([name, Icon]) => (
          <Stack key={name} align='center' spacing={4}>
            <Icon width={size} height={size} />
            <Heading variant='shadow' size='sm' content={name} />
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export const Icons = Template.bind({});
Icons.args = {
  size: 96,
};

export default {
  title: 'Components/Atoms/Icons',
} as Meta;
