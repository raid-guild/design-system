import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SimpleGrid } from '../../components/chakra';
import { ArchiveCartelCulture } from '../../components/icons';

type Args = {
  size: number;
};

const Template: Story<Args> = (args) => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 2 }}
    gap="4rem"
    my="2rem"
    ml={{ lg: '3rem' }}
  >
    <ArchiveCartelCulture width={args.size} height={args.size} />
  </SimpleGrid>
);

export const IconLib = Template.bind({});
IconLib.args = {
  size: 96,
};

export default {
  title: 'Components/Icons/Icons',
} as Meta;
