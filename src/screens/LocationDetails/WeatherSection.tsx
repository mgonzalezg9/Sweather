import { CurvedThemedView, View as ThemedView } from "@/components";
import { CityTitle, ForecastRow, WeatherDetails } from "@/weather/components";
import { Forecast, Weather } from "@/weather/interfaces";
import React from "react";
import { StyleSheet, View } from "react-native";

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
      <CurvedThemedView style={[styles.weatherCityTemp]}>
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
      </CurvedThemedView>
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
  weatherForecast: {
    minHeight: 200,
  },
});
