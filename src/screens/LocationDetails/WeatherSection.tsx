import { CurvedThemedView } from "@/components/view/CurvedView";
import { View as ThemedView } from "@/components/view/View";
import CityTitle from "@/weather/components/CityTitle";
import ForecastRow from "@/weather/components/ForecastRow";
import WeatherDetails from "@/weather/components/WeatherDetails";
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
