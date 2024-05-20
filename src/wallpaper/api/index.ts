import * as httpClient from "@/utils/httpClient";
import { WallpaperEndpoint } from "./endpoints";

const {
  EXPO_PUBLIC_UNSPLASH_URL: API_URL,
  EXPO_PUBLIC_UNSPLASH_API_KEY: API_KEY,
} = process.env;

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
