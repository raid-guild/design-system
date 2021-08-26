import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Flex, Image, Spacer } from '../../src';
import season2 from '../../src/assets/images/Season2-DAO-02b.png';
import {
	SidePanel,
	SidePanelProps
} from '../../src/components/atoms/SidePanel';
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
    <Flex>
      <Image
        src={season2}
        alt="season 2 logo"
        max-width="100px"
        height="auto"
      />
      <Spacer />
    </Flex>
  ),
};

export const WithLogoRight = Template.bind({});
WithLogoRight.args = {
  children: (
    <Flex>
      <Spacer />
      <Image
        src={season2}
        alt="season 2 logo"
        max-width="100px"
        height="auto"
      />
    </Flex>
  ),
};

export const Empty = Template.bind({});
Empty.args = {};
