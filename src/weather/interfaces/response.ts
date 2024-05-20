export interface Coordinate {
  lon: number;
  lat: number;
}

export interface CloudsData {
  all: number;
}

export interface WindData {
  speed: number;
  deg: number;
  gust: number;
}

export interface WeatherData {
  id: number;
  main: Condition;
  description: string;
  icon: string;
}

export type Condition =
  | "Clouds"
  | "Smoke"
  | "Fog"
  | "Haze"
  | "Mist"
  | "Rain"
  | "Squall"
  | "Drizzle"
  | "Snow"
  | "Clear"
  | "Thunderstorm"
  | "Wind"
  | "Dust"
  | "Sand"
  | "Ash"
  | "Tornado";
