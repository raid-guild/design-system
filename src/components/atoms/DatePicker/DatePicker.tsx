import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { FormControl, FormLabel, Box, Stack } from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form/dist/types/form';
import _ from 'lodash';
import { CustomDatePickerButton } from './CustomDatePickerButton';

// TODO handle separate controlled component
// TODO currently only single date is supported, but type shows that it can be a range

export type DatePickerProps = {
  name: string;
  label?: string;
  tip?: string;
  localForm: Pick<UseFormReturn, 'control' | 'formState' | 'watch'>;
  variant?: string;
  spacing?: number | string;
  // onChange?: (
  //   date: Date | [Date | null, Date | null] | null,
  //   event: SyntheticEvent<Date, Event> | undefined
  // ) => void;
} & ReactDatePickerProps;

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  localForm,
  variant,
  spacing,
  ...props
}: DatePickerProps) => {
  const { control, watch } = _.pick(localForm, ['control', 'watch']);

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
      <Stack sx={customDatePickerStyles} spacing={spacing}>
        {label && <FormLabel>{label}</FormLabel>}
        <Box>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ReactDatePicker
                {...field}
                selected={watch?.(name)}
                customInput={<CustomDatePickerButton variant={variant} />}
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
