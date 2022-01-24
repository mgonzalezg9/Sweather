import { get } from "../../utils/httpClient";
import config from "../../config/global";
import { Coordinates, Forecast, Weather } from "./types";
import * as Localization from "expo-localization";

const WEATHER_API_KEY = config.WEATHER_API_KEY as string;
const WEATHER_URL = config.WEATHER_URL as string;

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

  const data = await get(`${WEATHER_URL}/data/2.5/weather`, {
    ...createQuery({ location, coordinates }),
    units: UNIT_SYSTEM,
    lang: Localization.locale,
    appid: WEATHER_API_KEY,
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
    city: data.name,
    countryCode: data.sys.country,
    sunrise: new Date((data.sys.sunrise + data.timezone) * 1000),
    sunset: new Date((data.sys.sunset + data.timezone) * 1000),
  };
};

export const getHourlyForecast = async ({
  location,
  coordinates,
}: GetWeatherProps): Promise<Forecast> => {
  const data = await get(`${WEATHER_URL}/data/2.5/forecast`, {
    ...createQuery({ location, coordinates }),
    units: UNIT_SYSTEM,
    lang: Localization.locale,
    appid: WEATHER_API_KEY,
  });

  return {
    hours: data.list.slice(0, FORECAST_MAX_HOURS).map((f: any) => ({
      time: new Date((f.dt + data.city.timezone) * 1000),
      temperature: f.main.temp,
      condition: f.weather[0].main,
    })),
    sunrise: new Date((data.city.sunrise + data.city.timezone) * 1000),
    sunset: new Date((data.city.sunset + data.city.timezone) * 1000),
  };
};
