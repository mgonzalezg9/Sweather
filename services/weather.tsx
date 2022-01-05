import { get } from "../utils/httpClient";
import config from "../config/global";

const WEATHER_API_KEY = config.WEATHER_API_KEY as string;
const WEATHER_URL = config.WEATHER_URL as string;

export type Weather = {
  temperature: {
    current: number;
    feelsLike: number;
    min: number;
    max: number;
  };
  condition: string;
  wind: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  countryCode: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

type GetCurrentWeatherProps = {
  location?: string;
  coordinates?: Coordinates;
};
export const getCurrentWeather = async ({
  location,
  coordinates,
}: GetCurrentWeatherProps): Promise<Weather> => {
  const query = location
    ? { q: location }
    : {
        lat: coordinates?.latitude,
        lon: coordinates?.longitude,
      };
  const data = await get(`${WEATHER_URL}/data/2.5/weather`, {
    ...query,
    units: "metric",
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
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    countryCode: data.sys.country,
  };
};

export const getHourlyForecast = async (city: string) => {
  return await get(`${WEATHER_URL}/data/2.5/forecast`, {
    q: city,
    units: "metric",
    appid: WEATHER_API_KEY,
  });
};
