import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, RegisterOptions } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react';
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
  registerOptions?: RegisterOptions;
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
  registerOptions,
  variant,
  spacing,
  ...props
}: DatePickerProps) => {
  const {
    control,
    watch,
    formState: { errors },
  } = _.pick(localForm, ['control', 'watch', 'formState']);

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
    <Controller
      name={name}
      control={control}
      rules={registerOptions}
      shouldUnregister={false}
      render={({ field }) => (
        <FormControl isInvalid={!!errors[name]}>
          <Stack sx={customDatePickerStyles} spacing={spacing}>
            {label && <FormLabel m={0}>{label}</FormLabel>}
            <ReactDatePicker
              {...props}
              {...field}
              selected={watch?.(name)}
              customInput={<CustomDatePickerButton variant={variant} />}
              ref={(ref) => {
                field.ref({
                  focus: ref?.setFocus,
                });
              }}
            />
            <FormErrorMessage color='red.500'>
              {errors[name]?.message as string}
            </FormErrorMessage>
          </Stack>
        </FormControl>
      )}
    />
  );
};

export default DatePicker;