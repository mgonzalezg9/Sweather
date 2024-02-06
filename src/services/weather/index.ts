import { OPENWEATHER_API_KEY, OPENWEATHER_URL } from "@env";
import { locale } from "../../i18n/localization";
import { get } from "../../utils/httpClient";
import { formatMilliseconds } from "./time-formatter";
import { Coordinates, Forecast, Weather } from "./types";

const FORECAST_MAX_HOURS = 5;
const UNIT_SYSTEM = "metric";

type GetWeatherProps = {
  location?: string;
  coordinates?: Coordinates;
};

const createQuery = ({ location, coordinates }: GetWeatherProps) => {
  return location
    ? { q: location }
    : {
      lat: coordinates?.latitude,
      lon: coordinates?.longitude,
    };
};

export const getCurrentWeather = async ({
  location,
  coordinates,
}: GetWeatherProps): Promise<Weather> => {
  if (!location && !coordinates?.latitude && !coordinates?.longitude) {
    throw new Error("Either location or coordinates must be provided");
  }

  const data = await get(`${OPENWEATHER_URL}/data/2.5/weather`, {
    ...createQuery({ location, coordinates }),
    units: UNIT_SYSTEM,
    lang: locale,
    appid: OPENWEATHER_API_KEY,
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
      now: formatMilliseconds(((data.dt + data.timezone) * 1000)),
      sunrise: formatMilliseconds(((data.sys.sunrise + data.timezone) * 1000)),
      sunset: formatMilliseconds(((data.sys.sunset + data.timezone) * 1000)),
    },
  };
};

export const getHourlyForecast = async ({
  location,
  coordinates,
}: GetWeatherProps): Promise<Forecast> => {
  const data = await get(`${OPENWEATHER_URL}/data/2.5/forecast`, {
    ...createQuery({ location, coordinates }),
    units: UNIT_SYSTEM,
    lang: locale,
    appid: OPENWEATHER_API_KEY,
  });

  return {
    hours: data.list.slice(0, FORECAST_MAX_HOURS).map((f: any) => ({
      time: formatMilliseconds(((f.dt + data.city.timezone) * 1000)),
      temperature: f.main.temp,
      condition: f.weather[0].main,
    })),
    sunrise: formatMilliseconds(((data.city.sunrise + data.city.timezone) * 1000)),
    sunset: formatMilliseconds(((data.city.sunset + data.city.timezone) * 1000)),
  };
};
