import React from 'react';
import { Box, Flex, HStack, VStack } from '../../chakra';
import { Heading, Text } from '../../atoms';
import {
  BuildRoundTimelineOptions,
  buildRoundTimelineSteps,
  RoundData,
  TimelineStep,
} from './roundTimeline';

export interface RoundTimelineProps extends BuildRoundTimelineOptions {
  /**
   * The round record. Dates are intelligently parsed + formatted into the
   * "how to get funded" steps. Ignored when `steps` is provided.
   */
  round?: RoundData;
  /**
   * Fully control the rendered steps instead of deriving them from `round`.
   * Takes precedence over `round`.
   */
  steps?: TimelineStep[];
  /**
   * Layout direction. `responsive` (default) stacks vertically on mobile and
   * lays out horizontally from `md` up.
   */
  direction?: 'horizontal' | 'vertical' | 'responsive';
  /**
   * 1-based index of the active step — that step and everything before it are
   * highlighted as complete/current. `0` (default) highlights nothing.
   */
  activeStep?: number;
  /** Accent color for badges + connectors. Defaults to the brand primary. */
  accentColor?: string;
}

interface RendererProps {
  steps: TimelineStep[];
  activeStep: number;
  accentColor: string;
  connectorColor: string;
}

const StepBadge: React.FC<{
  index: number;
  isActive: boolean;
  accentColor: string;
}> = ({ index, isActive, accentColor }) => (
  <Flex
    align='center'
    justify='center'
    flexShrink={0}
    boxSize='2.5rem'
    borderRadius='full'
    borderWidth='2px'
    borderColor={accentColor}
    bg={isActive ? accentColor : 'transparent'}
    color={isActive ? 'white' : accentColor}
    fontWeight='bold'
  >
    {index}
  </Flex>
);

const StepText: React.FC<{
  step: TimelineStep;
  align: 'center' | 'flex-start';
}> = ({ step, align }) => (
  <VStack
    spacing={1}
    align={align}
    textAlign={align === 'center' ? 'center' : 'left'}
  >
    <Heading as='h4' size='sm'>
      {step.label}
    </Heading>
    {step.date && (
      <Text size='sm' fontWeight='semibold' color='primary.500'>
        {step.date}
      </Text>
    )}
    {step.description && (
      <Text size='sm' color='gray.500'>
        {step.description}
      </Text>
    )}
  </VStack>
);

const HorizontalTimeline: React.FC<RendererProps> = ({
  steps,
  activeStep,
  accentColor,
  connectorColor,
}) => (
  <Flex width='100%' align='flex-start' role='list'>
    {steps.map((step, index) => {
      const isActive = activeStep >= index + 1;
      const isLast = index === steps.length - 1;
      return (
        <Flex
          key={`${index + 1}-${step.label}`}
          role='listitem'
          direction='column'
          align='center'
          flex='1'
        >
          <Flex align='center' width='100%'>
            <Box
              flex='1'
              height='2px'
              visibility={index === 0 ? 'hidden' : 'visible'}
              bg={isActive ? accentColor : connectorColor}
            />
            <StepBadge
              index={index + 1}
              isActive={isActive}
              accentColor={accentColor}
            />
            <Box
              flex='1'
              height='2px'
              visibility={isLast ? 'hidden' : 'visible'}
              bg={activeStep >= index + 2 ? accentColor : connectorColor}
            />
          </Flex>
          <Box mt={3} px={2}>
            <StepText step={step} align='center' />
          </Box>
        </Flex>
      );
    })}
  </Flex>
);

const VerticalTimeline: React.FC<RendererProps> = ({
  steps,
  activeStep,
  accentColor,
  connectorColor,
}) => (
  <VStack spacing={0} align='stretch' width='100%' role='list'>
    {steps.map((step, index) => {
      const isActive = activeStep >= index + 1;
      const isLast = index === steps.length - 1;
      return (
        <HStack
          key={`${index + 1}-${step.label}`}
          role='listitem'
          align='flex-start'
          spacing={4}
        >
          <VStack spacing={0} alignSelf='stretch' flexShrink={0}>
            <StepBadge
              index={index + 1}
              isActive={isActive}
              accentColor={accentColor}
            />
            {!isLast && (
              <Box
                flex='1'
                width='2px'
                minH='1.5rem'
                bg={activeStep >= index + 2 ? accentColor : connectorColor}
              />
            )}
          </VStack>
          <Box pb={isLast ? 0 : 6} pt={1}>
            <StepText step={step} align='flex-start' />
          </Box>
        </HStack>
      );
    })}
  </VStack>
);

/**
 * RoundTimeline — the "how to get funded" timeline dripper.
 *
 * Pass a `round` record and it intelligently parses + formats the relevant
 * dates into ordered steps (Apply → Applications reviewed → Confirm
 * participation → {Round} → Payouts). Pass `steps` to render arbitrary copy.
 */
const RoundTimeline: React.FC<RoundTimelineProps> = ({
  round,
  steps,
  direction = 'responsive',
  activeStep = 0,
  accentColor = 'primary.500',
  ...buildOptions
}) => {
  const resolvedSteps =
    steps ?? (round ? buildRoundTimelineSteps(round, buildOptions) : []);

  if (resolvedSteps.length === 0) return null;

  // Connector colour derives from the accent palette (e.g. "primary.200").
  const connectorColor = `${accentColor.split('.')[0]}.200`;
  const rendererProps: RendererProps = {
    steps: resolvedSteps,
    activeStep,
    accentColor,
    connectorColor,
  };

  if (direction === 'horizontal')
    return <HorizontalTimeline {...rendererProps} />;
  if (direction === 'vertical') return <VerticalTimeline {...rendererProps} />;

  // Responsive: render both, toggle via display so it stays SSR-safe.
  return (
    <Box width='100%'>
      <Box display={['block', null, 'none']}>
        <VerticalTimeline {...rendererProps} />
      </Box>
      <Box display={['none', null, 'block']}>
        <HorizontalTimeline {...rendererProps} />
      </Box>
    </Box>
  );
};

export default RoundTimeline;
