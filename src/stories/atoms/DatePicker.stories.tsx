import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { DatePicker as DatePickerComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Atoms/DatePicker',
  component: DatePickerComponent,
} as Meta;

const DatePicker: StoryFn<typeof DatePickerComponent> = () => {
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

export { DatePicker };
