import React, { SyntheticEvent } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { FormControl, FormLabel, Box, Stack } from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form/dist/types/form';
import { CustomDatePickerButton } from './CustomDatePickerButton';

export interface DatePickerProps extends ReactDatePickerProps {
  name: string;
  label?: string;
  tip?: string;
  localForm: Pick<UseFormReturn, 'control' | 'formState' | 'watch'>;
  onChange: (
    date: Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined
  ) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  localForm,
  onChange,
  ...props
}: DatePickerProps) => {
  const { control } = localForm;

  // these are the values that seemed relevant. we can adjust and even theme this
  const customDatePickerStyles = {
    '.react-datepicker__header': {
      backgroundColor: 'gray.800',
      color: 'gray.100',
    },
    '.react-datepicker__month-container': {
      backgroundColor: 'gray.800',
      color: 'gray.100',
    },
    '.react-datepicker__current-month, .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__month, .react-datepicker__month-text':
      {
        color: 'gray.100',
      },
  };

  return (
    <FormControl mb={4}>
      <Stack sx={customDatePickerStyles} spacing={2}>
        {label && <FormLabel>{label}</FormLabel>}
        <Box my={2}>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ReactDatePicker
                {...field}
                onChange={onChange}
                selected={localForm.watch(name)}
                customInput={<CustomDatePickerButton />}
                {...props}
              />
            )}
          />
        </Box>
      </Stack>
    </FormControl>
  );
};

export default DatePicker;
