import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View } from "../../components/view/View";
import { getCurrentWeather, getHourlyForecast } from "../../services/weather";
import { RootStackScreenProps } from "../../types";
import background from "../../assets/images/background_1.jpg";
import WeatherSection from "./WeatherSection";

export default function LocationDetailsScreen({
  route: { params },
}: RootStackScreenProps<"LocationDetails">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={params.wallpaper || background}
        style={styles.backgroundImage}
      >
        <WeatherSection
          city={params.weather?.city}
          temperature={params.weather?.temperature.current}
          condition={params.weather?.condition}
          countryCode={params.weather?.countryCode}
          windSpeed={params.weather?.wind}
          forecast={params.forecast}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    height: "100%",
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});
