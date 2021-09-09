import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Flex, SimpleGrid } from '../../components/chakra';
import * as RootIcons from '../../components/icons';
import { styled } from '../..';
import { Heading } from '../../components/atoms/Heading';

const IconPreview = styled('div')`
  padding: 8px;
  text-align: center;
`;

type Args = {
  size: number;
};

const Template: Story<Args> = (args) => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 6 }}
    gap="4rem"
    my="2rem"
    ml={{ lg: '3rem' }}
  >
    {Object.entries(RootIcons).map(([name, Icon]) => (
      <IconPreview>
        <Flex justifyContent="center">
          <Icon width={args.size} height={args.size} />
        </Flex>
        <Heading variant="headingThree" content={name} />
      </IconPreview>
    ))}
  </SimpleGrid>
);

export const IconLib = Template.bind({});
IconLib.args = {
  size: 96,
};

export default {
  title: 'Components/Icons/Icons',
} as Meta;
