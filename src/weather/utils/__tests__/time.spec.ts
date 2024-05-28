import { formatMilliseconds, isDayTime } from "../time";
import {
  EN_LOCALE_TEST_SUITE,
  ES_LOCALE_TEST_SUITE,
  IS_DAY_TEST_SUITE,
} from "./data";

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

  IS_DAY_TEST_SUITE.forEach(({ time, sunrise, sunset, result }) => {
    it(`should correctly determine if it is day time for ${formatMilliseconds({
      time: time.getTime(),
      locale: enLocale,
      timeZone: "UTC",
    })}`, () => {
      expect(
        isDayTime({
          time,
          sunrise,
          sunset,
        })
      ).toBe(result);
    });
  });
});
