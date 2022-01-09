import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View } from "../../components/view/View";
import { Text } from "../../components/text/Text";

import { RootStackScreenProps } from "../../types";
import * as WeatherService from "../../services/weather";
import background from "../../assets/images/background_1.jpg";
import WeatherSection from "./WeatherSection";
import { getLocationBackground } from "../../services/wallpaper";

export default function LocationDetailsScreen({
  route: { params },
  navigation,
}: RootStackScreenProps<"LocationDetails">) {
  const [wallpaper, setWallpaper] = useState<{ uri: string } | null>();
  const [weatherData, setWeatherData] = useState<WeatherService.Weather>();

  useEffect(() => {
    console.log("Requesting weather at location", params.location);
    WeatherService.getCurrentWeather({
      location: params.location,
      coordinates: params.coordinates,
    })
      .then(setWeatherData)
      .catch(console.error);
  }, [params.location, params.coordinates]);

  useEffect(() => {
    console.log("Searching wallpaper");
    getLocationBackground({ query: weatherData?.city || params.location }).then(
      setWallpaper
    );
  }, [weatherData]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={wallpaper || background}
        style={styles.backgroundImage}
      >
        {/* <Text>{JSON.stringify(weatherData)}</Text> */}
        <WeatherSection
          city={weatherData?.city}
          temperature={weatherData?.temperature.current}
          condition={weatherData?.condition}
          countryCode={weatherData?.countryCode}
          windSpeed={weatherData?.wind}
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
