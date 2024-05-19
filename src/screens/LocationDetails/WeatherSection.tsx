import { View as ThemedView } from "@/components/view/View";
import ForecastRow from "@/components/weather/ForecastRow";
import { Forecast, Weather } from "@/services/weather/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import CityTitle from "./CityTitle";
import WeatherDetails from "./WeatherDetails";

interface WeatherSectionProps {
  weather: Weather;
  forecast: Forecast;
}

const WeatherSection: React.FC<WeatherSectionProps> = ({
  weather,
  forecast,
}) => {
  return (
    <View style={[styles.weatherPosition, styles.weatherContainer]}>
      <ThemedView style={[styles.weatherCityTemp, styles.curve]}>
        <CityTitle
          city={weather.geolocation.city}
          countryCode={weather.geolocation.countryCode}
        />
        <WeatherDetails
          temperature={weather.temperature.current}
          condition={weather.condition}
          windSpeed={weather.wind}
          time={weather.time}
        />
      </ThemedView>
      <ThemedView style={[styles.weatherForecast]}>
        <ForecastRow
          hours={forecast.hours}
          sunrise={forecast.sunrise}
          sunset={forecast.sunset}
        />
      </ThemedView>
    </View>
  );
};

export default WeatherSection;

const styles = StyleSheet.create({
  weatherPosition: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "67%",
  },
  weatherContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  weatherCityTemp: {
    flex: 1,
    justifyContent: "center",
    gap: 15,
  },
  curve: {
    borderTopRightRadius: 400,
  },
  weatherForecast: {
    minHeight: 200,
  },
});
