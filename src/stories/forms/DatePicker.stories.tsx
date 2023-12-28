import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StoryFn } from '@storybook/react';
import _ from 'lodash';
import { DatePicker as DatePickerComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Forms/DatePicker',
  component: DatePickerComponent,
}; // as Meta;

const DatePicker: StoryFn<typeof DatePickerComponent> = () => {
  const localForm = useForm();
  const { watch, reset } = _.pick(localForm, ['watch', 'reset']);
  useEffect(() => {
    reset({ raidStartDate: new Date() });
  }, []);

  const startDate = watch('raidStartDate')?.toLocaleDateString();

  return (
    <Box m='15px'>
      <Stack spacing={4}>
        <DatePickerComponent
          name='raidStartDate'
          localForm={localForm}
          label='Raid Start Date'
          tooltip='The date the raid is expected to start'
        />
        <Text variant='shadow'>Selected Date: {startDate}</Text>
      </Stack>
    </Box>
  );
};

export { DatePicker };
