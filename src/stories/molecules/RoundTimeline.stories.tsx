import React from 'react';
import type { StoryFn } from '@storybook/react';
import {
  Box,
  Heading,
  RoundTimeline,
  RoundData,
  Text,
  VStack,
  buildRoundTimelineSteps,
} from '../..';

export default {
  title: 'Components/Molecules/RoundTimeline',
  component: RoundTimeline,
  argTypes: {
    direction: {
      options: ['responsive', 'horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    showYear: { control: 'boolean' },
    activeStep: { control: { type: 'number', min: 0, max: 5 } },
  },
};

/**
 * The real Q2 2026 round (from MA-3303). Dates are stored as plain
 * `YYYY-MM-DD` strings on the round record — exactly what the app passes in —
 * and the component parses + formats them into the timeline copy.
 */
const round3: RoundData = {
  name: 'Round 3',
  applicationsOpen: '2026-06-01',
  applicationsClose: '2026-06-12',
  notificationDate: '2026-06-15',
  confirmParticipationDeadline: '2026-06-30',
  startDate: '2026-07-01',
  endDate: '2026-07-21',
  payoutDate: '2026-08-10',
};

const RoundDataPanel: React.FC<{ round: RoundData; title?: string }> = ({
  round,
  title = 'Round data (input)',
}) => (
  <Box
    as='pre'
    p={4}
    borderRadius='md'
    bg='gray.800'
    color='gray.100'
    fontSize='xs'
    overflowX='auto'
    width='100%'
  >
    <Text as='span' color='gray.400'>
      {`// ${title}\n`}
    </Text>
    {JSON.stringify(round, null, 2)}
  </Box>
);

/**
 * Default story — pass the round record, get the rendered "how to get funded"
 * timeline. Toggle direction / showYear / activeStep from the controls.
 */
const Template: StoryFn<typeof RoundTimeline> = (args) => (
  <Box maxW='960px' p={6}>
    <RoundTimeline {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  round: round3,
  direction: 'responsive',
  showYear: false,
  activeStep: 0,
};

/** Side-by-side: the input round record and what it renders to. */
export const FromRoundData: StoryFn = () => {
  const steps = buildRoundTimelineSteps(round3);
  return (
    <VStack align='stretch' spacing={6} maxW='960px' p={6}>
      <Heading size='md'>How to get funded — {round3.name}</Heading>
      <RoundDataPanel round={round3} />
      <Box>
        <Text mb={3} color='gray.500'>
          Renders to:
        </Text>
        <RoundTimeline round={round3} direction='horizontal' />
      </Box>
      <Box
        as='pre'
        p={4}
        borderRadius='md'
        bg='gray.800'
        color='gray.100'
        fontSize='xs'
        overflowX='auto'
      >
        <Text as='span' color='gray.400'>
          {'// buildRoundTimelineSteps(round) →\n'}
        </Text>
        {JSON.stringify(steps, null, 2)}
      </Box>
    </VStack>
  );
};

/** Highlight progress through the round with `activeStep`. */
export const WithActiveStep: StoryFn = () => (
  <Box maxW='960px' p={6}>
    <Text mb={4} color='gray.500'>
      activeStep=3 — applications reviewed and participation confirmed.
    </Text>
    <RoundTimeline round={round3} direction='horizontal' activeStep={3} />
  </Box>
);

/** Vertical layout, with the year shown on every date. */
export const VerticalWithYear: StoryFn = () => (
  <Box maxW='420px' p={6}>
    <RoundTimeline round={round3} direction='vertical' showYear />
  </Box>
);

/**
 * Smart date formatting. The same helper handles same-month ranges, cross-month
 * ranges, cross-year ranges, and missing dates — without any extra config.
 */
const crossBoundaryRound: RoundData = {
  name: 'Winter Round',
  applicationsOpen: '2026-11-20',
  applicationsClose: '2026-12-05',
  notificationDate: '2026-12-10',
  confirmParticipationDeadline: '2026-12-20',
  startDate: '2026-12-28',
  endDate: '2027-01-18',
  payoutDate: '2027-02-05',
};

export const SmartDateFormatting: StoryFn = () => (
  <VStack align='stretch' spacing={6} maxW='960px' p={6}>
    <Text color='gray.500'>
      A round spanning the new year — the round step collapses to{' '}
      <Text as='span' color='primary.500'>
        “December 28, 2026 – January 18, 2027”
      </Text>{' '}
      and keeps both years for clarity.
    </Text>
    <RoundDataPanel round={crossBoundaryRound} />
    <RoundTimeline round={crossBoundaryRound} direction='horizontal' showYear />
  </VStack>
);

/**
 * A partial round record (no payout date yet, applications still open). Undated
 * steps still render; pass `hideUndatedSteps` to drop them.
 */
export const PartialRound: StoryFn = () => {
  const partial: RoundData = {
    name: 'Round 4',
    notificationDate: '2026-09-15',
    confirmParticipationDeadline: '2026-09-30',
    startDate: '2026-10-01',
    endDate: '2026-10-21',
    // payoutDate intentionally omitted — TBD
  };
  return (
    <VStack align='stretch' spacing={6} maxW='960px' p={6}>
      <RoundDataPanel round={partial} />
      <RoundTimeline round={partial} direction='horizontal' />
    </VStack>
  );
};

/** Full control: pass `steps` directly instead of a round record. */
export const CustomSteps: StoryFn = () => (
  <Box maxW='960px' p={6}>
    <RoundTimeline
      direction='horizontal'
      activeStep={2}
      steps={[
        { label: 'Apply', date: 'Open now' },
        { label: 'Applications reviewed', date: 'June 15' },
        {
          label: 'Confirm participation',
          date: 'By June 30',
          description: 'Accepted projects only',
        },
        { label: 'Round 3', date: 'July 1–21' },
        { label: 'Payouts', date: 'By August 10' },
      ]}
    />
  </Box>
);
