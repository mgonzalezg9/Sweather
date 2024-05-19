import { formatMilliseconds } from "../time-formatter";

const MINUTE = 60000;
const HOUR = MINUTE * 60;

const ES_LOCALE_TEST_SUITE = [
  [0, "00:00"],
  [MINUTE, "00:01"],
  [2 * MINUTE, "00:02"],
  [HOUR, "01:00"],
  [2 * HOUR, "02:00"],
  [12 * HOUR, "12:00"],
  [13 * HOUR, "13:00"],
  [23 * HOUR, "23:00"],
  [24 * HOUR, "00:00"],
] as const;
const EN_LOCALE_TEST_SUITE = [
  [0, "12:00 AM"],
  [MINUTE, "12:01 AM"],
  [2 * MINUTE, "12:02 AM"],
  [HOUR, "01:00 AM"],
  [2 * HOUR, "02:00 AM"],
  [12 * HOUR, "12:00 PM"],
  [13 * HOUR, "01:00 PM"],
  [23 * HOUR, "11:00 PM"],
  [24 * HOUR, "12:00 AM"],
] as const;

describe("Weather Service Time formatter", () => {
  const esLocale = "es-ES";
  it.each(ES_LOCALE_TEST_SUITE)(
    `should format time for ${esLocale}`,
    (time, result) => {
      expect(formatMilliseconds({ time, locale: esLocale })).toBe(result);
    }
  );

  const enLocale = "en-US";
  it.each(EN_LOCALE_TEST_SUITE)(
    `should format time for ${enLocale}`,
    (time, result) => {
      expect(formatMilliseconds({ time, locale: enLocale })).toBe(result);
    }
  );
});
