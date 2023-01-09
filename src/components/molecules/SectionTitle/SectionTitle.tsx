import React from 'react';
import { VStack, HStack } from '../../chakra';
import { Heading } from '../../atoms';

// import Swords from '../../../assets/images/swords-mid.svg';
// import LeftWing from '../../../assets/images/LeftWing.svg';
// import RightWing from '../../../assets/images/RightWing.svg';

interface Props {
  title?: string;
}

const SectionTitle = ({ title }: Props) =>
  title ? (
    <VStack py='2rem'>
      {/* <Image src={Swords.src} /> */}
      <HStack>
        {/* <Image src={LeftWing.src} width={[`25vw`, `30vw`]} /> */}
        <Heading maxW='15ch' textAlign='center' size='md'>
          {title}
        </Heading>
        {/* <Image src={RightWing.src} width={[`25vw`, `30vw`]} /> */}
      </HStack>
    </VStack>
  ) : (
    <HStack>
      {/* <Image src={LeftWing.src} width={[`25vw`, `30vw`]} />
      <Image src={Swords.src} />
      <Image src={RightWing.src} width={[`25vw`, `30vw`]} /> */}
    </HStack>
  );

export default SectionTitle;
