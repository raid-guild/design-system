import React from 'react';
import { useForm } from 'react-hook-form';
import { DatePicker, DatePickerProps } from '../..';

export default {
  title: 'Components/Atoms/DatePicker',
  component: DatePicker,
};

const Default = (args: DatePickerProps) => {
  const localForm = useForm();
  return (
    <form>
      <DatePicker {...args} localForm={localForm} />
    </form>
  );
};

const WithTip = (args: DatePickerProps) => {
  const localForm = useForm();
  return (
    <form>
      <DatePicker {...args} localForm={localForm} />
    </form>
  );
};

Default.args = {
  name: 'engagementDate',
  label: 'Date of Contribution Engagement (UTC)',
  defaultValue: new Date(),
};

WithTip.args = {
  name: 'engagementDate',
  label: 'Date of Contribution Engagement (UTC)',
  defaultValue: new Date(),
  tip: 'Use the date picker to set your Contribution engagement date..',
};

export { Default, WithTip };
