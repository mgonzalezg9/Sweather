import { CloudsData, Coordinate, WeatherData, WindData } from "./response";

export interface WeatherResponse {
  coord: Coordinate;
  weather: WeatherData[];
  base: string;
  main: MainData;
  visibility: number;
  wind: WindData;
  clouds: CloudsData;
  dt: number;
  sys: SysData;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface SysData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
