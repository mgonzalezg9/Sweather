import { SweatherErrorCode } from "@/error/error-logic";
import {
  getCurrentWeather,
  getHourlyForecast,
} from "@/weather/services/weather";
import { useEffect, useState } from "react";
import { Coordinates, Forecast, Weather } from "../interfaces";

export type LocationQuery = {
  location: string;
  coordinates: Coordinates;
  device: {
    locale: string;
    timeZone?: string;
  };
};

const getWeatherAndForecast = async ({
  location,
  coordinates,
  device,
}: LocationQuery) => {
  const [weather, forecast] = await Promise.all([
    getCurrentWeather({
      location,
      coordinates,
      device,
    }),
    getHourlyForecast({
      location,
      coordinates,
      device,
    }),
  ]);

  return { weather, forecast };
};

export default function useWeatherForecast({
  location,
  coordinates,
  device: { locale, timeZone },
}: LocationQuery) {
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<Forecast>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<SweatherErrorCode | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      if (!location && !coordinates) {
        return;
      }

      console.log("Requesting weather at location", location || coordinates);
      setLoading(true);

      try {
        const { weather, forecast } = await getWeatherAndForecast({
          location,
          coordinates,
          device: {
            locale,
            timeZone,
          },
        });

        setWeather(weather);
        setForecast(forecast);
        setError(null);
      } catch (error) {
        console.error(
          `Unable to retrieve weather at location ${location || coordinates}`
        );
        setError(SweatherErrorCode.WEATHER_SERVICE_ERROR);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [location, coordinates, timeZone, locale]);

  return {
    weather,
    forecast,
    loading: isLoading,
    error: isError,
  };
}
