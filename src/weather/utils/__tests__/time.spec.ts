import { formatDate, hasDaylight } from "../time";
import {
  EN_LOCALE_TEST_SUITE,
  ES_LOCALE_TEST_SUITE,
  IS_DAY_TEST_SUITE,
} from "./__data__";

describe("Weather Service Time formatter", () => {
  const esLocale = "es-ES";
  ES_LOCALE_TEST_SUITE.forEach(([time, result]) =>
    it(`should format time "${result}" for ${esLocale}`, () => {
      expect(formatDate({ time, locale: esLocale })).toBe(result);
    })
  );

  const enLocale = "en-US";
  EN_LOCALE_TEST_SUITE.forEach(([time, result]) =>
    it(`should format time "${result}" for ${enLocale}`, () => {
      expect(formatDate({ time, locale: enLocale })).toBe(result);
    })
  );

  IS_DAY_TEST_SUITE.forEach(({ time, sunrise, sunset, result }) => {
    it(`should correctly determine if ${formatDate({
      time,
      locale: enLocale,
      timeZone: "UTC",
    })} has day light`, () => {
      expect(
        hasDaylight({
          time,
          sunrise,
          sunset,
        })
      ).toBe(result);
    });
  });
});
