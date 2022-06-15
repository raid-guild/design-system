import React from 'react';
import _ from 'lodash';
import type { StoryFn } from '@storybook/react';
import {
  Stack,
  useTheme,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '../..';
import ColorSplotch from './ColorSplotch';
import { colorsWithObject } from './colorsUtils';

export default {
  title: 'System/Colors',
};

const Colors: StoryFn = () => {
  const theme = useTheme();

  const colors: { colors: any[]; misc: any[] } = colorsWithObject(
    _.get(theme, 'colors')
  );

  return (
    <Stack padding={3} spacing={8}>
      <ColorSplotch
        keys={_.keys(_.get(colors, 'colors'))}
        colors={_.get(colors, 'colors')}
      />
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton justifyContent='space-between'>
            <Text>Miscellaneous Colors</Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <ColorSplotch
              keys={_.keys(_.get(colors, 'misc'))}
              colors={_.get(colors, 'misc')}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export { Colors };
