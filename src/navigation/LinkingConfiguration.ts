/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "./types.d";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("")],
  config: {
    screens: {
      LocationRequest: "request",
      LocationDetails: "details",
      WallpaperInfo: "wallpaper-info",
      NotFound: "*",
    },
  },
};

export default linking;
