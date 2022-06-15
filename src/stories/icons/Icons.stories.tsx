import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Flex, SimpleGrid } from '../../components/chakra';
import * as RootIcons from '../../components/icons';
import { Heading } from '../../components/atoms';
import { styled } from '../..';

const IconPreview = styled('div')`
  padding: 8px;
  text-align: center;
`;

const Template: StoryFn = (args) => {
  const { size } = args;
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 6 }}
      gap='4rem'
      my='2rem'
      ml={{ lg: '3rem' }}
    >
      {Object.entries(RootIcons).map(([name, Icon]) => (
        <IconPreview key={name}>
          <Flex justifyContent='center'>
            <Icon width={size} height={size} />
          </Flex>
          <Heading variant='shadow' size='sm' content={name} />
        </IconPreview>
      ))}
    </SimpleGrid>
  );
};

export const IconLib = Template.bind({});
IconLib.args = {
  size: 96,
};

export default {
  title: 'Components/Atoms/Icons',
} as Meta;
