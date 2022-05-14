import React from 'react';
import { Story } from '@storybook/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '../..';

export default {
  title: 'System/Spacing',
};

const spacingSizes = [
  { name: 'px', space: '1px', pixels: 1 },
  { name: '0.5', space: '0.125rem', pixels: 2 },
  { name: '1', space: '0.25rem', pixels: 4 },
  { name: '1.5', space: '0.375rem', pixels: 6 },
  { name: '2', space: '0.5rem', pixels: 8 },
  { name: '2.5', space: '0.625rem', pixels: 10 },
  { name: '3', space: '0.75rem', pixels: 12 },
  { name: '3.5', space: '0.875rem', pixels: 14 },
  { name: '4', space: '1rem', pixels: 16 },
  { name: '5', space: '1.25rem', pixels: 20 },
  { name: '6', space: '1.5rem', pixels: 24 },
  { name: '7', space: '1.75rem', pixels: 28 },
  { name: '8', space: '2rem', pixels: 32 },
  { name: '9', space: '2.25rem', pixels: 36 },
  { name: '10', space: '2.5rem', pixels: 40 },
  { name: '12', space: '3rem', pixels: 48 },
  { name: '14', space: '3.5rem', pixels: 56 },
  { name: '16', space: '4rem', pixels: 64 },
  { name: '20', space: '5rem', pixels: 80 },
  { name: '24', space: '6rem', pixels: 96 },
  { name: '28', space: '7rem', pixels: 112 },
  { name: '32', space: '8rem', pixels: 128 },
  { name: '36', space: '9rem', pixels: 144 },
  { name: '40', space: '10rem', pixels: 160 },
  { name: '44', space: '11rem', pixels: 176 },
  { name: '48', space: '12rem', pixels: 192 },
  { name: '56', space: '14rem', pixels: 224 },
  { name: '60', space: '15rem', pixels: 240 },
  { name: '64', space: '16rem', pixels: 256 },
  { name: '72', space: '18rem', pixels: 288 },
  { name: '80', space: '20rem', pixels: 320 },
  { name: '96', space: '24rem', pixels: 384 },
];

const HeaderFooterRow = () => (
  <Tr>
    <Th width={7}>Name</Th>
    <Th width={7}>Space</Th>
    <Th width={7}>Pixels</Th>
    <Th />
  </Tr>
);

const Spacing: Story = () => (
  <TableContainer>
    <Table variant='simple'>
      <TableCaption>Spacing examples for the default theme</TableCaption>
      <Thead>
        <HeaderFooterRow />
      </Thead>
      <Tbody>
        {spacingSizes.map((space) => (
          <Tr>
            <Td width={7}>{space.name}</Td>
            <Td width={7}>{space.space}</Td>
            <Td width={7}>{`${space.pixels}px`}</Td>
            <Td>
              <Box bg='red' width={`${space.pixels}px`} height='16px' />
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <HeaderFooterRow />
      </Tfoot>
    </Table>
  </TableContainer>
);

export { Spacing };
