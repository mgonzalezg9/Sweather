import { View as ThemedView } from "@/components/view/View";
import ForecastRow from "@/components/weather/ForecastRow";
import { Forecast, Weather } from "@/services/weather/types";
import React from "react";
import { StyleSheet } from "react-native";
import CityTitle from "./CityTitle";
import WeatherDetails from "./WeatherDetails";

interface WeatherSectionProps {
  weather: Weather;
  forecast: Forecast;
};

const WeatherSection: React.FC<WeatherSectionProps> = ({
  weather,
  forecast,
}) => {
  return (
    <ThemedView style={[styles.curvedBox, styles.weatherContainer]}>
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
      <ForecastRow
        hours={forecast.hours}
        sunrise={forecast.sunrise}
        sunset={forecast.sunset}
      />
    </ThemedView>
  );
};

export default WeatherSection;

const styles = StyleSheet.create({
  curvedBox: {
    position: "absolute",
    top: "35%",
    width: "100%",
    height: "67%",
    borderTopRightRadius: 400,
  },
  weatherContainer: {
    justifyContent: "center",
    gap: 25,
    padding: 10
  }
});
