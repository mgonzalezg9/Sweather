/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { Wallpaper } from "@/wallpaper/interfaces";
import { Forecast, Weather } from "@/weather/interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  LocationRequest: undefined;
  LocationDetails: {
    weather: Weather;
    forecast: Forecast;
    wallpaper: Wallpaper;
  };
  WallpaperInfo: {
    wallpaper: Wallpaper;
  };
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
