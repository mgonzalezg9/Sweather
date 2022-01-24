import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { View } from "../../components/view/View";
import CityTitle from "./CityTitle";
import WeatherDetails from "./WeatherDetails";
import { countries } from "country-data";
import ForecastRow from "../../components/weather/ForecastRow";
import { Forecast } from "../../services/weather/types";
import { getCountry } from "country-list-spanish";
import * as Localization from "expo-localization";

type WeatherSectionProps = {
  city: string;
  countryCode: string;
  temperature: number;
  condition: string;
  windSpeed: number;
  forecast: Forecast;
};

const WeatherSection = ({
  city,
  countryCode,
  temperature,
  condition,
  windSpeed,
  forecast,
}: Partial<WeatherSectionProps>) => {
  let regionName = "-";
  if (countryCode) {
    regionName =
      Localization.locale === "en"
        ? countries[countryCode].name
        : getCountry(countryCode);
  }

  return (
    <View style={styles.container}>
      <CityTitle style={styles.title} city={city} country={regionName} />
      <WeatherDetails
        temperature={temperature}
        condition={condition}
        windSpeed={windSpeed}
      />
      <ForecastRow
        hours={forecast?.hours}
        sunrise={forecast?.sunrise}
        sunset={forecast?.sunset}
      />
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
