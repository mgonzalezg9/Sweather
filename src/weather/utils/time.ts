interface formatDateOptions {
  time: Date;
  locale: string;
  timeZone?: string;
}

/**
 * Formats a given time in milliseconds to a localized time string.
 *
 * @param {Object} options - The options object.
 * @param {Date} options.time - The time Date object.
 * @param {string} options.locale - A string with a BCP 47 language tag, or an array of such strings, to specify the locale.
 * @param {string} [options.timeZone="UTC"] - An optional string representing the time zone to use. Defaults to "UTC".
 * @returns {string} - A string representing the formatted time according to the specified locale and time zone.
 *
 * @example
 * // Example usage:
 * const formattedTime = formatDate({ time: Date.now(), locale: 'en-US', timeZone: 'America/New_York' });
 * console.log(formattedTime); // Output: "02:30 PM" (depending on the current time)
 */
export const formatDate = ({
  time,
  locale,
  timeZone = "UTC",
}: formatDateOptions) => {
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  });

  return timeFormatter.format(time);
};

interface HasDaylightProps {
  time: Date;
  sunrise: Date;
  sunset: Date;
}

/**
 * Determines whether a given time is during the day, based on sunrise and sunset times,
 * ignoring the date component and only considering the hours and minutes.
 *
 * @param {Object} params - The parameters object.
 * @param {Date} params.time - The current time to check.
 * @param {Date} params.sunrise - The time of sunrise.
 * @param {Date} params.sunset - The time of sunset.
 * @returns {boolean} - Returns `true` if the time is between sunrise and sunset, otherwise `false`.
 */
export const hasDaylight = ({
  time,
  sunrise,
  sunset,
}: HasDaylightProps): boolean => {
  time.setFullYear(2000, 0, 1);
  sunrise.setFullYear(2000, 0, 1);
  sunset.setFullYear(2000, 0, 1);

  return time >= sunrise && time <= sunset;
};
