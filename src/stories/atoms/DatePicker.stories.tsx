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
        <DatePickerComponent
          name='raidStartDate'
          localForm={localForm}
          label='Raid Start Date'
          defaultValue={testDateValue}
          onChange={(selectedDate) => {
            setTestDateValue(selectedDate as Date);
          }}
        />
        <Text variant='shadow'>Selected Date: {testDateValue?.toString()}</Text>
      </Stack>
    </Box>
  );
};

export { DatePicker };
