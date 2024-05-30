import { weatherApi } from "../../api";
import { WeatherEndpoint } from "../../api/endpoints";
import type {
  Coordinates,
  Forecast,
  ForecastResponse,
  Weather,
  WeatherResponse,
} from "../../interfaces";
import { parseForecastResponse, parseWeatherResponse } from "./parser";

const UNIT_SYSTEM = "metric";

type DeviceProps = {
  device: {
    locale: string;
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

  const data = await weatherApi.get<WeatherResponse>(
    WeatherEndpoint.GetCurrentWeather,
    {
      ...createQuery({ location, coordinates }),
      units: UNIT_SYSTEM,
      lang: device.locale,
    }
  );

  return parseWeatherResponse(data);
};

type GetHourlyForecastProps = DeviceProps & CreateQueryProps;
export const getHourlyForecast = async ({
  location,
  coordinates,
  device,
}: GetHourlyForecastProps): Promise<Forecast> => {
  const data = await weatherApi.get<ForecastResponse>(
    WeatherEndpoint.GetHourlyForecast,
    {
      ...createQuery({ location, coordinates }),
      units: UNIT_SYSTEM,
      lang: device.locale,
    }
  );

  return parseForecastResponse(data);
};
