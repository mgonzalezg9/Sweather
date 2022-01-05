import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import * as WeatherService from "../../services/weather";

export default function LocationDetailsScreen({
  route: {
    params: { location, coordinates },
  },
}: RootStackScreenProps<"LocationDetails">) {
  const [weatherData, setWeatherData] = useState<WeatherService.Weather>();

  useEffect(() => {
    console.log("Requesting weather at location", location);
    WeatherService.getCurrentWeather(location).then(setWeatherData);
  }, [location, coordinates]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          The weather at {location} is currently {weatherData?.condition} with a
          temperature of {weatherData?.temperature.current}°C.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
});
