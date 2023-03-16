import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryObj } from '@storybook/react';
import {
  DatePicker as DatePickerComponent,
  Box,
  Stack,
  Text,
  defaultTheme,
  clientTheme,
} from '../..';

export default {
  title: 'Components/Atoms/DatePicker',
  component: DatePickerComponent,
} as Meta;
type Story = StoryObj<typeof DatePickerComponent>;

const DatePickerStoryContent = () => {
  const localForm = useForm();
  useEffect(() => {
    localForm.reset({ raidStartDate: new Date() });
  }, []);

  return (
    <Box m='15px'>
      <Stack spacing={4}>
        <DatePickerComponent
          name='raidStartDate'
          localForm={localForm}
          label='Raid Start Date'
          onChange={(selectedDate) => {
            localForm.setValue('raidStartDate', selectedDate as Date);
          }}
        />
        <Text variant='shadow'>
          Selected Date:{' '}
          {localForm.getValues('raidStartDate') &&
            localForm.getValues('raidStartDate').toLocaleDateString()}
        </Text>
      </Stack>
    </Box>
  );
};

export const Guild: Story = {
  render: () => <DatePickerStoryContent />,
  name: 'RaidGuild',

  parameters: {
    chakra: {
      theme: defaultTheme,
    },
  },
};

export const Client: Story = {
  render: () => <DatePickerStoryContent />,
  name: 'ClientTheme',
  parameters: {
    chakra: {
      theme: clientTheme,
    },
  },
};
