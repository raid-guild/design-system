/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  ChakraSlider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  SliderMark,
  ChakraSliderProps,
} from '../../../chakra';
import { Tooltip } from '../../../atoms/Tooltip';

interface markValue {
  label: string;
  value: number;
}

export interface CustomSliderProps {
  label: string;
  markValues?: markValue[];
  withTooltip?: boolean;
  tooltipVariant?: string;
  setFinalSliderValue?: (value: any) => void;
}

export type ControlledSliderProps = CustomSliderProps & ChakraSliderProps;

const ControlledSlider = ({
  label,
  markValues,
  min,
  max,
  step,
  defaultValue,
  setFinalSliderValue,
  withTooltip = false,
  tooltipVariant,
}: ControlledSliderProps) => {
  const [sliderValue, setSliderValue] = useState(defaultValue);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <ChakraSlider
      aria-label={label}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      onChange={(v) => setSliderValue(v)}
      onChangeEnd={(v) => setFinalSliderValue && setFinalSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {markValues &&
        markValues.map((mark) => (
          <SliderMark
            value={mark.value}
            mt='1'
            ml='-2.5'
            fontSize='sm'
            key={`${mark.label}-${mark.value}`}
          >
            {mark.label}
          </SliderMark>
        ))}
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      {withTooltip ? (
        <Tooltip
          hasArrow
          isOpen={showTooltip}
          label={`$${sliderValue}`}
          variant={tooltipVariant}
        >
          <SliderThumb />
        </Tooltip>
      ) : (
        <SliderThumb />
      )}
    </ChakraSlider>
  );
};

export default ControlledSlider;
