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
  defaultValue?: Date | null | undefined;
  localForm: Pick<UseFormReturn, 'control' | 'formState'>;
  onChange: (
    date: Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<Date, Event> | undefined
  ) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  tip,
  defaultValue,
  localForm,
  onChange,
  ...props
}: DatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = localForm;

  return (
    <FormControl mb={4} isInvalid={errors && errors[name] !== undefined}>
      <Stack spacing={2}>
        {label && <FormLabel label={label} />}
        {tip && <HelperText tipText={tip} fontSize='xs' color='gray.700' />}
        <Box my={2}>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ReactDatePicker
                {...field}
                onBlur={field.onBlur}
                selected={defaultValue}
                onChange={onChange}
                customInput={<CustomDatePickerButton />}
                {...props}
              />
            )}
          />
          {errors && (
            <ErrorMessage
              errorMessage={errors[name] && errors[name]?.message?.toString()}
            />
          )}
        </Box>
      </Stack>
    </FormControl>
  );
};

export default DatePicker;
