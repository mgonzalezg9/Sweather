import {
  Forecast,
  ForecastResponse,
  Weather,
  WeatherResponse,
} from "@/weather/interfaces";

const getDate = (seconds: number) => new Date(seconds * 1000);

export const parseWeatherResponse = (response: WeatherResponse): Weather => {
  const now = getDate(response.dt).toISOString();
  const sunrise = getDate(response.sys.sunrise).toISOString();
  const sunset = getDate(response.sys.sunset).toISOString();

  return {
    temperature: {
      current: response.main.temp,
      feelsLike: response.main.feels_like,
      min: response.main.temp_min,
      max: response.main.temp_max,
    },
    condition: response.weather[0].main,
    wind: response.wind.speed,
    humidity: response.main.humidity,
    geolocation: {
      city: response.name,
      countryCode: response.sys.country,
    },
    time: {
      now,
      sunrise,
      sunset,
    },
  };
};

const FORECAST_MAX_HOURS = 10;

export const parseForecastResponse = (response: ForecastResponse): Forecast => {
  const sunrise = getDate(response.city.sunrise).toISOString();
  const sunset = getDate(response.city.sunset).toISOString();

  return {
    hours: response.list.slice(0, FORECAST_MAX_HOURS).map((f: any) => ({
      time: getDate(f.dt).toISOString(),
      temperature: f.main.temp,
      condition: f.weather[0].main,
    })),
    sunrise,
    sunset,
  };
};
