/**
 * Date parsing + formatting helpers for the RoundTimeline.
 *
 * Round records store dates in all sorts of shapes (Date objects, ISO
 * strings, plain `YYYY-MM-DD` strings, or epoch millis). These helpers
 * normalise them to a Date and render them as human friendly copy without
 * pulling in a date library.
 */

export type RoundDateInput = Date | string | number | null | undefined;

export interface FormatDateOptions {
  /** Include the year in the output (e.g. "July 1, 2026"). Defaults to true. */
  year?: boolean;
  /** Use short month names (e.g. "Jul" instead of "July"). Defaults to long. */
  month?: 'long' | 'short';
}

const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// En dash, used to join date ranges (e.g. "July 1–21").
const RANGE_SEPARATOR = '–';

/**
 * Normalise any supported date input to a Date instance, or `undefined` when
 * the value is missing / unparseable.
 *
 * Plain `YYYY-MM-DD` strings are intentionally parsed in local time so a round
 * that starts on "2026-07-01" doesn't render as June 30th in negative
 * timezones (the default `new Date('2026-07-01')` parses as UTC midnight).
 */
export const toDate = (value: RoundDateInput): Date | undefined => {
  if (value === null || value === undefined || value === '') return undefined;

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? undefined : value;
  }

  if (typeof value === 'number') {
    const fromNumber = new Date(value);
    return Number.isNaN(fromNumber.getTime()) ? undefined : fromNumber;
  }

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (dateOnly) {
    const local = new Date(
      Number(dateOnly[1]),
      Number(dateOnly[2]) - 1,
      Number(dateOnly[3])
    );
    return Number.isNaN(local.getTime()) ? undefined : local;
  }

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

const monthName = (date: Date, month: 'long' | 'short') =>
  (month === 'short' ? MONTHS_SHORT : MONTHS_LONG)[date.getMonth()];

/**
 * Format a single date, e.g. "July 1, 2026" or (with `year: false`) "July 1".
 * Returns `undefined` when the value can't be parsed.
 */
export const formatDate = (
  value: RoundDateInput,
  { year = true, month = 'long' }: FormatDateOptions = {}
): string | undefined => {
  const date = toDate(value);
  if (!date) return undefined;

  const base = `${monthName(date, month)} ${date.getDate()}`;
  return year ? `${base}, ${date.getFullYear()}` : base;
};

/**
 * Format a date range, intelligently collapsing shared parts:
 *  - same day            → "July 1, 2026"
 *  - same month + year   → "July 1–21, 2026"
 *  - same year           → "July 1 – August 5, 2026"
 *  - different years     → "December 28, 2026 – January 5, 2027"
 *
 * When only one endpoint is provided it falls back to a single formatted date.
 * Years are always shown when the endpoints span different years, even if
 * `year: false` was requested, so the range stays unambiguous.
 */
export const formatDateRange = (
  startInput: RoundDateInput,
  endInput: RoundDateInput,
  { year = true, month = 'long' }: FormatDateOptions = {}
): string | undefined => {
  const start = toDate(startInput);
  const end = toDate(endInput);

  if (!start && !end) return undefined;
  if (start && !end) return formatDate(start, { year, month });
  if (!start && end) return formatDate(end, { year, month });

  // Both defined past this point.
  const from = start as Date;
  const to = end as Date;

  const sameYear = from.getFullYear() === to.getFullYear();
  const sameMonth = sameYear && from.getMonth() === to.getMonth();
  const sameDay = sameMonth && from.getDate() === to.getDate();

  if (sameDay) return formatDate(from, { year, month });

  if (sameMonth) {
    const base = `${monthName(
      from,
      month
    )} ${from.getDate()}${RANGE_SEPARATOR}${to.getDate()}`;
    return year ? `${base}, ${from.getFullYear()}` : base;
  }

  if (sameYear) {
    const base = `${monthName(
      from,
      month
    )} ${from.getDate()} ${RANGE_SEPARATOR} ${monthName(
      to,
      month
    )} ${to.getDate()}`;
    return year ? `${base}, ${from.getFullYear()}` : base;
  }

  // Different years — always show the year on both ends to stay unambiguous.
  return `${formatDate(from, {
    year: true,
    month,
  })} ${RANGE_SEPARATOR} ${formatDate(to, { year: true, month })}`;
};
