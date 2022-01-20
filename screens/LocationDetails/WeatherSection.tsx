import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { View } from "../../components/view/View";
import CityTitle from "./CityTitle";
import WeatherDetails from "./WeatherDetails";
import { countries } from "country-data";
import ForecastRow from "../../components/weather/ForecastRow";
import { Forecast } from "../../services/weather/types";

type WeatherSectionProps = {
  city: string;
  countryCode: string;
  temperature: number;
  condition: string;
  windSpeed: number;
  sunrise: Date;
  sunset: Date;
  forecast: Forecast;
};

const WeatherSection = ({
  city,
  countryCode,
  temperature,
  condition,
  windSpeed,
  forecast,
  sunset,
  sunrise,
}: Partial<WeatherSectionProps>) => {
  const regionName = countryCode ? countries[countryCode].name : "-";

  return (
    <View style={styles.container}>
      <CityTitle style={styles.title} city={city} country={regionName} />
      <WeatherDetails
        temperature={temperature}
        condition={condition}
        windSpeed={windSpeed}
      />
      <ForecastRow forecast={forecast} sunrise={sunrise} sunset={sunset} />
    </View>
  );
};

export default WeatherSection;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "35%",
    width: "100%",
    height: "67%",
    borderTopRightRadius: 500,
  },
  title: {
    position: "absolute",
    top: 75,
    left: 5,
  },
});
