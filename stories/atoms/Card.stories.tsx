import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Card, CardProps, SimpleGrid } from '../../src';
import imgConsultations from '../../src/assets/images/consultations.png';
import imgDesignSprints from '../../src/assets/images/designsprints.png';
import imgFullStack from '../../src/assets/images/fullstackdev.png';
import imgMarketing from '../../src/assets/images/marketing.png';

export default {
  title: 'Components/Atoms/Card',
  component: Card,
} as Meta;

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos ut voluptate eveniet? Sunt totam, quidem, nobis corrupti voluptatum aliquam expedita voluptas alias laborum eos dolor esse fugiat? Explicabo, tenetur.';

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Single = Template.bind({});
Single.args = {
  title: 'Card Title',
  text: lorem,
  imgSrc: imgConsultations,
};

const images = [
  imgConsultations,
  imgDesignSprints,
  imgFullStack,
  imgMarketing,
];

const cardProps = Array.from(new Array(4), (_, i) => ({
  title: `Card ${i}`,
  text: lorem,
  imgSrc: images[i],
}));

const MultipleTemplate: Story<CardProps> = () => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 2 }}
    gap="4rem"
    my="2rem"
    ml={{ lg: '3rem' }}
  >
    {cardProps.map((props) => (
      <Card key={props.title} {...props} />
    ))}
  </SimpleGrid>
);
export const Multiple = MultipleTemplate.bind({});
