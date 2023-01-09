import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { DatePicker as DatePickerComponent, Box } from '../..';

export default {
  title: 'Components/Atoms/DatePicker',
  component: DatePickerComponent,
} as Meta;

const DatePicker: StoryFn<typeof DatePickerComponent> = () => {
  const localForm = useForm();
  const [, setTestDateValue] = useState<
    Date | [Date | null, Date | null] | null
  >(new Date());

  return (
    <Box m='15px'>
      <DatePicker
        name='raidStartDate'
        localForm={localForm}
        label='Raid Start Date'
        defaultValue={new Date()}
        onChange={(date) => setTestDateValue(date)}
      />
    </Box>
  );
};

export { DatePicker };
