import * as httpClient from "@/utils/httpClient";
import { WeatherEndpoint } from "./endpoints";

// ! Forbidden according to https://docs.expo.dev/guides/environment-variables/#how-to-read-from-environment-variables
// const {
//   EXPO_PUBLIC_OPENWEATHER_API_KEY: API_KEY,
//   EXPO_PUBLIC_OPENWEATHER_URL: API_URL,
// } = process.env;
const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_OPENWEATHER_URL;

export const weatherApi = {
  get: <T>(
    endpoint: WeatherEndpoint,
    filters: Record<string, any>
  ): Promise<T> =>
    httpClient.get(API_URL + endpoint, {
      ...filters,
      appid: API_KEY,
    }),
};
