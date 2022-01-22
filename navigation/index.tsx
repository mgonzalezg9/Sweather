/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, LogBox } from "react-native";
import LocationDetailsScreen from "../screens/LocationDetails";

import LocationRequestScreen from "../screens/LocationRequest";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

// Suppress warning when passing dates to LocationDetails
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

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
