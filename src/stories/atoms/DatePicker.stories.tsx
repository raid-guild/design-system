import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { DatePicker as DatePickerComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/DatePicker',
  component: DatePickerComponent,
} as Meta;

const DatePicker: StoryFn<typeof DatePickerComponent> = () => {
  const localForm = useForm();
  const [testDateValue, setTestDateValue] = useState<Date | null>(new Date());

  return (
    <Box m='15px'>
      <Stack spacing={4}>
        <Text>Date: {new Date(testDateValue).toString()}</Text>
        <DatePickerComponent
          name='raidStartDate'
          localForm={localForm}
          label='Raid Start Date'
          defaultValue={new Date()}
          onChange={(selectedDate) => {
            setTestDateValue(selectedDate);
          }}
        />
      </Stack>
    </Box>
  );
};

export { DatePicker };
