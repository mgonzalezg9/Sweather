/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { hasEnvironmentVariables } from "@/config/dotenv";
import LocationDetailsScreen from "@/screens/LocationDetails";
import LocationRequestScreen from "@/screens/LocationRequest";
import NotFoundScreen from "@/screens/NotFoundScreen";
import { OPENWEATHER_API_KEY, OPENWEATHER_URL, UNSPLASH_API_KEY, UNSPLASH_URL } from "@env";
import {
  DarkTheme, DefaultTheme, NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, LogBox } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "./types.d";

// Suppress warning when passing dates to LocationDetails
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

// Parse environment variables
if (!hasEnvironmentVariables({ OPENWEATHER_API_KEY, OPENWEATHER_URL, UNSPLASH_API_KEY, UNSPLASH_URL })) {
  throw new Error('Please provide all the required environment variables')
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LocationRequest"
        component={LocationRequestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops" }}
      />
    </Stack.Navigator>
  );
}
