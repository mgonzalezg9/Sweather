import { get } from "@/utils/httpClient";
import { formatMilliseconds } from "./time-formatter";
import { Coordinates, Forecast, Weather } from "./types";

const FORECAST_MAX_HOURS = 5;
const UNIT_SYSTEM = "metric";

const { EXPO_PUBLIC_OPENWEATHER_API_KEY, EXPO_PUBLIC_OPENWEATHER_URL } =
  process.env;

type DeviceProps = {
  device: {
    locale: string;
    timeZone?: string;
  };
};

type CreateQueryProps = {
  location?: string;
  coordinates?: Coordinates;
};

const createQuery = ({ location, coordinates }: CreateQueryProps) => {
  return location
    ? { q: location }
    : {
        lat: coordinates?.latitude,
        lon: coordinates?.longitude,
      };
};

type GetWeatherProps = DeviceProps & CreateQueryProps;
export const getCurrentWeather = async ({
  location,
  coordinates,
  device,
}: GetWeatherProps): Promise<Weather> => {
  if (!location && !coordinates?.latitude && !coordinates?.longitude) {
    throw new Error("Either location or coordinates must be provided");
  }

  const data = await get(`${EXPO_PUBLIC_OPENWEATHER_URL}/data/2.5/weather`, {
    ...createQuery({ location, coordinates }),
    units: UNIT_SYSTEM,
    lang: device.locale,
    appid: EXPO_PUBLIC_OPENWEATHER_API_KEY,
  });

  return {
    temperature: {
      current: data.main.temp,
      feelsLike: data.main.feels_like,
      min: data.main.temp_min,
      max: data.main.temp_max,
    },
    condition: data.weather[0].main,
    wind: data.wind.speed,
    humidity: data.main.humidity,
    geolocation: {
      city: data.name,
      countryCode: data.sys.country,
    },
    time: {
      now: formatMilliseconds({
        time: (data.dt + data.timezone) * 1000,
        locale: device.locale,
        timeZone: device.timeZone,
      }),
      sunrise: formatMilliseconds({
        time: (data.sys.sunrise + data.timezone) * 1000,
        locale: device.locale,
        timeZone: device.timeZone,
      }),
      sunset: formatMilliseconds({
        time: (data.sys.sunset + data.timezone) * 1000,
        locale: device.locale,
        timeZone: device.timeZone,
      }),
    },
  };
};

type GetHourlyForecastProps = DeviceProps & CreateQueryProps;
export const getHourlyForecast = async ({
  location,
  coordinates,
  device,
}: GetHourlyForecastProps): Promise<Forecast> => {
  const data = await get(`${EXPO_PUBLIC_OPENWEATHER_URL}/data/2.5/forecast`, {
    ...createQuery({ location, coordinates }),
    units: UNIT_SYSTEM,
    lang: device.locale,
    appid: EXPO_PUBLIC_OPENWEATHER_API_KEY,
  });

  return {
    hours: data.list.slice(0, FORECAST_MAX_HOURS).map((f: any) => ({
      time: formatMilliseconds({
        time: (f.dt + data.city.timezone) * 1000,
        locale: device.locale,
        timeZone: device.timeZone,
      }),
      temperature: f.main.temp,
      condition: f.weather[0].main,
    })),
    sunrise: formatMilliseconds({
      time: (data.city.sunrise + data.city.timezone) * 1000,
      locale: device.locale,
      timeZone: device.timeZone,
    }),
    sunset: formatMilliseconds({
      time: (data.city.sunset + data.city.timezone) * 1000,
      locale: device.locale,
      timeZone: device.timeZone,
    }),
  };
};
