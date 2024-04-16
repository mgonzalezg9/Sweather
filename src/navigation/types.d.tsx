/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { Uri } from "@/services/wallpaper/types";
import { Forecast, Weather } from "@/services/weather/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  LocationRequest: undefined;
  LocationDetails: {
    weather: Weather;
    forecast: Forecast;
    wallpaper?: Uri;
  };
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
