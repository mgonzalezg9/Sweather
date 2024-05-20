import { CloudsData, Coordinate, WeatherData, WindData } from "./response";

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastData[];
  city: CityData;
}

interface CityData {
  id: number;
  name: string;
  coord: Coordinate;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface ForecastData {
  dt: number;
  main: MainData;
  weather: WeatherData[];
  clouds: CloudsData;
  wind: WindData;
  visibility: number;
  pop: number;
  sys: SysData;
  dt_txt: string;
}

interface SysData {
  pod: string;
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
