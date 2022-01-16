import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { View } from "../../components/view/View";
import CityTitle from "./CityTitle";
import WeatherDetails from "./WeatherDetails";
import { countries } from "country-data";
import ForecastRow from "../../components/weather/ForecastRow";

type WeatherSectionProps = {
  city: string;
  countryCode: string;
  temperature: number;
  condition: string;
  windSpeed: number;
};

const WeatherSection = ({
  city,
  countryCode,
  temperature,
  condition,
  windSpeed,
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
      <ForecastRow
        forecast={[
          { time: "9:00", condition: "Clouds", temperature: 18 },
          { time: "9:00", condition: "Clouds", temperature: 18 },
        ]}
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
