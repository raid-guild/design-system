import React from 'react';
import _ from 'lodash';
import { Stack, SimpleGrid, GridItem, Heading, Text, Box } from '../..';
import { colorsThatNeedDarkText, importantColors } from './colorsUtils';

const importantKeys = _.keys(importantColors);

interface ColorSplotchProps {
  colorName: string;
  value: string;
  darkText: boolean;
  important: boolean;
}

const ColorSplotch = ({
  colorName,
  value,
  darkText,
  important,
}: ColorSplotchProps) => (
  <GridItem
    padding={2}
    borderRadius='8px'
    minH='100px'
    bgColor={value}
    key={colorName}
    position='relative'
  >
    <Box
      position='absolute'
      top='-5px'
      left='-5px'
      width='102%'
      height='102%'
      background={
        important
          ? 'linear-gradient(95.58deg, #FF3864 0%, #8B1DBA 53.65%, #4353DF 100%)'
          : undefined
      }
      filter='blur(10px)'
      zIndex={-1}
    />
    <Stack spacing={1}>
      {important && (
        <Heading
          as='p'
          size='xs'
          color={darkText ? 'blackAlpha.900' : undefined}
        >
          {importantColors[colorName]}
        </Heading>
      )}
      <Text size='md' color={darkText ? 'blackAlpha.900' : undefined}>
        {colorName}
      </Text>
      <Text size='sm' color={darkText ? 'blackAlpha.900' : undefined}>
        {value.toUpperCase()}
      </Text>
    </Stack>
  </GridItem>
);

const ColorSplotchSet = ({ keys, colors }: { keys: any[]; colors: any[] }) => (
  <Stack spacing={5}>
    {_.map(keys, (color: string) => {
      const colorValues = _.get(colors, color);

      return (
        <Stack key={color}>
          <Heading textAlign='center'>{_.upperFirst(color)}</Heading>
          <SimpleGrid columns={5} spacing={3}>
            {_.map(colorValues, (value: string, key: string) => {
              const colorName = `${color}.${key}`;
              const darkText = _.includes(colorsThatNeedDarkText, colorName);
              const importantColor = _.includes(importantKeys, colorName);

              return (
                <ColorSplotch
                  important={importantColor}
                  darkText={darkText}
                  value={value}
                  colorName={colorName}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
      );
    })}
  </Stack>
);

export default ColorSplotchSet;
