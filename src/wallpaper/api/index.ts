import * as httpClient from "@/utils/httpClient";
import { WallpaperEndpoint } from "./endpoints";

// ! Forbidden according to https://docs.expo.dev/guides/environment-variables/#how-to-read-from-environment-variables
// const {
//   EXPO_PUBLIC_UNSPLASH_URL: API_URL,
//   EXPO_PUBLIC_UNSPLASH_API_KEY: API_KEY,
// } = process.env;
const API_KEY = process.env.EXPO_PUBLIC_UNSPLASH_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_UNSPLASH_URL;

export const wallpaperApi = {
  get: <T>(
    endpoint: WallpaperEndpoint,
    filters: Record<string, any>
  ): Promise<T> =>
    httpClient.get(API_URL + endpoint, {
      ...filters,
      client_id: API_KEY,
    }),
};
