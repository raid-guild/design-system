import React, { useState } from 'react';
import { Button, ChakraButtonGroup } from '../../chakra';

export interface ButtonGroupProps {
  /**
   * Provide the list of buttons
   */
  buttons: string[];
  /**
   * Provide the default selected value
   */
  defaultSelected?: number;
  /**
   * Display the buttons as a single entity
   */
  isAttached?: boolean;
  /**
   * How large should the buttons be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Function to call when button is selected
   */
  // eslint-disable-next-line no-unused-vars
  onSelect: (index: number) => void;
}

/**
 * Container for grouping and wrapping buttons - can be used for toggles
 */
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  defaultSelected = 0,
  size = 'sm',
  isAttached = true,
  onSelect,
  ...props
}) => {
  const [selected, setSelected] = useState<number>(defaultSelected);

  const handleSelection = (index: number) => {
    setSelected(index);
    onSelect(index);
  };

  return (
    <ChakraButtonGroup isAttached={isAttached}>
      {buttons.map((label: string, i: number) => {
        return (
          <Button
            key={label}
            variant={i === selected ? 'solid' : 'outline'}
            color='white'
            size={size}
            onClick={() => handleSelection(i)}
            {...props}
          >
            {label}
          </Button>
        );
      })}
    </ChakraButtonGroup>
  );
};

export default ButtonGroup;
