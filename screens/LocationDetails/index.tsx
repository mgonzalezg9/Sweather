import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View } from "../../components/view/View";
import { getCurrentWeather, getHourlyForecast } from "../../services/weather";
import { RootStackScreenProps } from "../../types";
import background from "../../assets/images/background_1.jpg";
import WeatherSection from "./WeatherSection";
import { getLocationBackground } from "../../services/wallpaper";
import { Forecast, Weather } from "../../services/weather/types";

export default function LocationDetailsScreen({
  route: { params },
}: RootStackScreenProps<"LocationDetails">) {
  const [wallpaper, setWallpaper] = useState<{ uri: string } | null>();
  const [weatherData, setWeatherData] = useState<Weather>();
  const [forecastData, setForecastData] = useState<Forecast>();

  useEffect(() => {
    console.log("Requesting weather at location", params.location);

    const query = {
      location: params.location,
      coordinates: params.coordinates,
    };
    getCurrentWeather(query).then(setWeatherData).catch(console.error);
    getHourlyForecast(query).then(setForecastData).catch(console.error);
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
        <WeatherSection
          city={weatherData?.city}
          temperature={weatherData?.temperature.current}
          condition={weatherData?.condition}
          countryCode={weatherData?.countryCode}
          windSpeed={weatherData?.wind}
          forecast={forecastData}
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
