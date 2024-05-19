import * as httpClient from "@/utils/httpClient";
import { WeatherEndpoint } from "./endpoints";

const {
  EXPO_PUBLIC_OPENWEATHER_API_KEY: API_KEY,
  EXPO_PUBLIC_OPENWEATHER_URL: API_URL,
} = process.env;

export const weatherApi = {
  get: (endpoint: WeatherEndpoint, filters: Record<string, any>) =>
    httpClient.get(API_URL + endpoint, {
      ...filters,
      appid: API_KEY,
    }),
};
