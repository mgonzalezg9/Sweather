import { formatMilliseconds } from "../time-formatter";

const MINUTE = 60000;
const HOUR = MINUTE * 60;

const ES_LOCALE_TEST_SUITE = [
    [0, "01:00"],
    [MINUTE, "01:01"],
    [2 * MINUTE, "01:02"],
    [HOUR, "02:00"],
    [2 * HOUR, "03:00"],
    [12 * HOUR, "13:00"],
    [13 * HOUR, "14:00"],
    [23 * HOUR, "00:00"],
    [24 * HOUR, "01:00"],
] as const
const EN_LOCALE_TEST_SUITE = [
    [0, "01:00 AM"],
    [MINUTE, "01:01 AM"],
    [2 * MINUTE, "01:02 AM"],
    [HOUR, "02:00 AM"],
    [2 * HOUR, "03:00 AM"],
    [12 * HOUR, "01:00 PM"],
    [13 * HOUR, "02:00 PM"],
    [23 * HOUR, "12:00 AM"],
    [24 * HOUR, "01:00 AM"],
] as const

describe("Weather Service Time formatter", () => {
    it.each(ES_LOCALE_TEST_SUITE)("should format time", (ms, result) => {
        expect(formatMilliseconds(ms)).toBe(result);
    });

    const enLocale = 'en-US';
    it.each(EN_LOCALE_TEST_SUITE)(`should format time for ${enLocale}`, (ms, result) => {
        expect(formatMilliseconds(ms, enLocale)).toBe(result);
    });
})