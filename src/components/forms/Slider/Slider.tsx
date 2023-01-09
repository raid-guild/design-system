/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import { UseFormReturn, useController } from 'react-hook-form';
import _ from 'lodash';
import {
  ChakraSlider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  SliderMark,
  ChakraSliderProps,
} from '../../chakra';
import { Tooltip } from '../../atoms/Tooltip';

interface markValue {
  label: string;
  value: number;
}

export interface CustomSliderProps {
  // name: string;
  label: string;
  markValues?: markValue[];
  withTooltip?: boolean;
  tooltipVariant?: string;
  // localForm: UseFormReturn;
}

export type SliderProps = CustomSliderProps & ChakraSliderProps;

const Slider = ({
  label,
  // name,
  markValues,
  min,
  max,
  step,
  // localForm,
  withTooltip = false,
  tooltipVariant,
}: SliderProps) => {
  // const { control } = localForm;
  // const {
  //   field,
  //   formState: { errors },
  // } = useController({
  //   control,
  //   name,
  //   // rules: { required: { value: true, message: "Required field" } }
  // });
  // const [sliderValue, setSliderValue] = useState<<any>>(defaultValue);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <ChakraSlider
      aria-label={label}
      // defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      // onChange={(v) => setSliderValue(v)}
      // onChangeEnd={(v) => setFinalSliderValue && setFinalSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {_.map(markValues, (mark) => (
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
          // label={`$${sliderValue}`}
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

export default Slider;
