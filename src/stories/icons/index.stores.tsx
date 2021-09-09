import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SimpleGrid } from '../../components/chakra';
import { ArchiveCartelCulture } from '../../components/icons';

export default {
  title: 'Components/Icons',
} as Meta;

const Template: Story = () => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 2 }}
    gap="4rem"
    my="2rem"
    ml={{ lg: '3rem' }}
  >
    <ArchiveCartelCulture />
  </SimpleGrid>
);
export const Lib = Template.bind({});
