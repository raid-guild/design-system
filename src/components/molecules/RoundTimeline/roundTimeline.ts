import { formatDate, formatDateRange, RoundDateInput, toDate } from './dates';

/**
 * A funding round record. Every date is optional and accepts a Date, an ISO /
 * `YYYY-MM-DD` string, or epoch millis — whatever the round record happens to
 * hold. Missing dates degrade gracefully (the step still renders, just without
 * a date).
 */
export interface RoundData {
  /** Display name of the round, e.g. "Round 3". Used as the round step label. */
  name?: string;
  /** When applications open. */
  applicationsOpen?: RoundDateInput;
  /** When applications close. */
  applicationsClose?: RoundDateInput;
  /** When applicants are notified / applications are reviewed. */
  notificationDate?: RoundDateInput;
  /** Deadline for accepted projects to confirm participation. */
  confirmParticipationDeadline?: RoundDateInput;
  /** When the round (the work + funding period) starts. */
  startDate?: RoundDateInput;
  /** When the round (the work + funding period) ends. */
  endDate?: RoundDateInput;
  /** When payouts are distributed. */
  payoutDate?: RoundDateInput;
}

/** A single rendered step in the timeline. */
export interface TimelineStep {
  /** Heading copy for the step, e.g. "Confirm participation". */
  label: string;
  /** Pre-formatted date copy, e.g. "By June 30" or "July 1–21, 2026". */
  date?: string;
  /** Optional supporting copy shown beneath the date. */
  description?: string;
}

/** Per-step copy overrides. */
export interface TimelineLabels {
  apply?: string;
  review?: string;
  confirm?: string;
  /** Round step label. Falls back to `round.name`, then this value. */
  round?: string;
  payout?: string;
}

export interface BuildRoundTimelineOptions {
  /** Override the default step labels. */
  labels?: TimelineLabels;
  /**
   * Show the year in formatted dates. Defaults to `false` to match the
   * "how to get funded" marketing copy (e.g. "By August 10"). Ranges that
   * span multiple years always show the year regardless.
   */
  showYear?: boolean;
  /** Prefix for deadline-style dates (confirm + payout). Defaults to "By ". */
  deadlinePrefix?: string;
  /**
   * Drop steps that have no resolvable date. Defaults to `false` so the full
   * journey is always shown.
   */
  hideUndatedSteps?: boolean;
}

const DEFAULT_LABELS: Required<TimelineLabels> = {
  apply: 'Apply',
  review: 'Applications reviewed',
  confirm: 'Confirm participation',
  round: 'Round',
  payout: 'Payouts',
};

const withPrefix = (prefix: string, date?: string) =>
  date ? `${prefix}${date}` : undefined;

/**
 * Map a round record to the ordered "how to get funded" timeline steps,
 * intelligently formatting each step's dates from the round record.
 *
 * Reflects the copy + date spec from MA-3303:
 *   1. Apply                  — application window
 *   2. Applications reviewed  — notification date
 *   3. Confirm participation  — "By {confirm participation deadline}"
 *   4. {Round name}           — "{round start}–{round end}"
 *   5. Payouts                — "By {payout date}"
 */
export const buildRoundTimelineSteps = (
  round: RoundData,
  options: BuildRoundTimelineOptions = {}
): TimelineStep[] => {
  const {
    labels = {},
    showYear = false,
    deadlinePrefix = 'By ',
    hideUndatedSteps = false,
  } = options;

  const copy = { ...DEFAULT_LABELS, ...labels };
  const year = showYear;

  const steps: TimelineStep[] = [
    {
      label: copy.apply,
      date:
        formatDateRange(round.applicationsOpen, round.applicationsClose, {
          year,
        }) || undefined,
    },
    {
      label: copy.review,
      date: formatDate(round.notificationDate, { year }),
    },
    {
      label: copy.confirm,
      date: withPrefix(
        deadlinePrefix,
        formatDate(round.confirmParticipationDeadline, { year })
      ),
    },
    {
      label: round.name || labels.round || copy.round,
      date: formatDateRange(round.startDate, round.endDate, { year }),
    },
    {
      label: copy.payout,
      date: withPrefix(deadlinePrefix, formatDate(round.payoutDate, { year })),
    },
  ];

  return hideUndatedSteps ? steps.filter((step) => Boolean(step.date)) : steps;
};

/**
 * Derive which step is currently active for a round based on `now`, so the
 * timeline can highlight progress. Returns a 1-based index, or 0 when the
 * round hasn't opened yet.
 */
export const getActiveRoundStep = (
  round: RoundData,
  now: Date = new Date()
): number => {
  const ms = now.getTime();
  const at = (value: RoundDateInput) => toDate(value)?.getTime();

  const payout = at(round.payoutDate);
  const end = at(round.endDate);
  const start = at(round.startDate);
  const confirm = at(round.confirmParticipationDeadline);
  const review = at(round.notificationDate);
  const open = at(round.applicationsOpen);

  if (payout !== undefined && ms >= payout) return 5;
  if (start !== undefined && ms >= start) return 4;
  if (confirm !== undefined && ms >= confirm) return 3;
  if (end !== undefined && start === undefined && ms >= end) return 4;
  if (review !== undefined && ms >= review) return 2;
  if (open !== undefined && ms >= open) return 1;
  return 0;
};
