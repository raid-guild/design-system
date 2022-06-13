import React, { useState } from 'react';
import {
  ChakraSlider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  SliderMark,
  ChakraSliderProps,
  ChakraTooltip,
} from '../../chakra';

interface markValue {
  label: string;
  value: number;
}

interface CustomSliderProps {
  label: string;
  markValues?: markValue[];
  withToolTip?: boolean;
  setFinalSliderValue?: (value: any) => void;
}

export type SliderProps = CustomSliderProps & ChakraSliderProps;

const Slider: React.FC<SliderProps> = ({
  label,
  markValues,
  min,
  max,
  step,
  defaultValue,
  setFinalSliderValue,
  withToolTip = false,
}: SliderProps) => {
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
      {withToolTip ? (
        <ChakraTooltip
          hasArrow
          bg='linear-gradient(94.89deg, #FF5A00 0%, #D62789 70.2%, #AD17AD 100%)'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`$${sliderValue}`}
        >
          <SliderThumb />
        </ChakraTooltip>
      ) : (
        <SliderThumb />
      )}
    </ChakraSlider>
  );
};

export default Slider;
