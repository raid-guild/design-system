import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Box, Center, Image } from 'components/chakra';
import { SidePanel, SidePanelProps } from 'components/atoms';
import season2 from 'assets/images/Season2-DAO-02b.png';

export default {
  title: 'Components/Atoms/SidePanel',
  component: SidePanel,
  argTypes: {
    width: { control: 'number' },
  },
} as Meta;

const Template: Story<SidePanelProps> = (args) => <SidePanel {...args} />;

export const WithLogoLeft = Template.bind({});
WithLogoLeft.args = {
  children: (
    <SidePanel>
      <Box
        as='nav'
        pos='fixed'
        top='0'
        left='0'
        zIndex='sticky'
        p='5'
        h='full'
        w='60'
        overflowX='hidden'
        overflowY='auto'
      >
        <Center pointerEvents='none' z-index='0'>
          <Image src={season2} alt='season 2 logo' w='100px' h='100px' />
        </Center>
      </Box>
    </SidePanel>
  ),
};

export const WithLogoRight = Template.bind({});
WithLogoRight.args = {
  children: (
    <SidePanel>
      <Box
        as='nav'
        pos='fixed'
        top='0'
        right='0'
        p='5'
        zIndex='sticky'
        h='full'
        w='60'
        overflowX='hidden'
        overflowY='auto'
      >
        <Center pointerEvents='none' z-index='0'>
          <Image src={season2} alt='season 2 logo' w='100px' h='100px' />
        </Center>
      </Box>
    </SidePanel>
  ),
};

export const Empty = Template.bind({});
Empty.args = {};
