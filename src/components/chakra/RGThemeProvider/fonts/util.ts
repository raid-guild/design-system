export type Source = { location: string; format: string };

export type Font = {
  label?: string;
  family: string;
  style?: string;
  weight: number;
  sources: Source[];
};

export const mapSourceWeights = (
  inputSources: { [weight: number]: Source[] },
  family: string,
  weight: number
): Font => {
  const sources = inputSources[weight];
  return {
    family,
    weight,
    sources,
  };
};
