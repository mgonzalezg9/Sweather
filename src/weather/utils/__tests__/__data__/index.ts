const MINUTE = 60000;
const HOUR = MINUTE * 60;

export const ES_LOCALE_TEST_SUITE = [
  [new Date(0), "00:00"],
  [new Date(MINUTE), "00:01"],
  [new Date(2 * MINUTE), "00:02"],
  [new Date(HOUR), "01:00"],
  [new Date(2 * HOUR), "02:00"],
  [new Date(12 * HOUR), "12:00"],
  [new Date(13 * HOUR), "13:00"],
  [new Date(23 * HOUR), "23:00"],
  [new Date(24 * HOUR), "00:00"],
] as const;
export const EN_LOCALE_TEST_SUITE = [
  [new Date(0), "12:00 AM"],
  [new Date(MINUTE), "12:01 AM"],
  [new Date(2 * MINUTE), "12:02 AM"],
  [new Date(HOUR), "01:00 AM"],
  [new Date(2 * HOUR), "02:00 AM"],
  [new Date(12 * HOUR), "12:00 PM"],
  [new Date(13 * HOUR), "01:00 PM"],
  [new Date(23 * HOUR), "11:00 PM"],
  [new Date(24 * HOUR), "12:00 AM"],
] as const;

export const IS_DAY_TEST_SUITE = [
  {
    time: new Date(2022, 1, 1, 0, 0, 0), // 00:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
  {
    time: new Date(2022, 1, 1, 12, 0, 0), // 12:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: true,
  },
  {
    time: new Date(2022, 1, 1, 23, 59, 59), // 23:59
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
  {
    time: new Date(2022, 1, 2, 0, 0, 0), // 00:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
  {
    time: new Date(2022, 1, 1, 5, 59, 59), // 05:59
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
  {
    time: new Date(2022, 1, 1, 18, 0, 1), // 18:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
  {
    time: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: true,
  },
  {
    time: new Date(2022, 1, 1, 5, 0, 0), // 05:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
  {
    time: new Date(2022, 1, 1, 19, 0, 0), // 19:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
  // Different year dates
  {
    time: new Date(2023, 1, 1, 12, 0, 0), // 12:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: true,
  },
  {
    time: new Date(2023, 1, 1, 0, 0, 0), // 0:00
    sunrise: new Date(2022, 1, 1, 6, 0, 0), // 06:00
    sunset: new Date(2022, 1, 1, 18, 0, 0), // 18:00
    result: false,
  },
] as const;
