import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Tooltip } from '../../../atoms';
import {
  ChakraInput,
  ChakraInputProps,
  FormLabel,
  FormControl,
  FormHelperText,
  Stack,
  FormErrorMessage,
  HStack,
  IconButton,
  Icon,
} from '../../../chakra';

type CustomControlledInputProps = {
  /**
   * optional, displays label if provided
   */
  label?: string | React.ReactNode;
  /**
   *  optional, not required since no form control
   */
  name?: string;
  tip?: string; // optional, displays tip if provided
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  helperText?: string;
  tooltip?: string;
  error?: string;
};

type ControlledInputProps = ChakraInputProps & CustomControlledInputProps;

const ControlledInput: React.FC<ControlledInputProps> = ({
  label,
  name,
  defaultValue,
  onChange,
  value,
  helperText,
  tooltip,
  error,
  ...props
}: ControlledInputProps) => {
  return (
    <FormControl>
      <Stack>
        <HStack>
          {label && <FormLabel>{label}</FormLabel>}
          {tooltip && (
            <Tooltip label={tooltip} aria-label={tooltip}>
              <IconButton
                icon={<Icon as={AiOutlineInfoCircle} />}
                aria-label='info button'
              />
            </Tooltip>
          )}
        </HStack>

        <ChakraInput
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
          value={value}
          {...props} // catches other ChakraInput props such as placeholder
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </Stack>
    </FormControl>
  );
};

export default ControlledInput;
