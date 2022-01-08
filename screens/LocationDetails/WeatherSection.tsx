import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { View } from "../../components/view/View";
import { Text } from "../../components/text/Text";
import CityTitle from "./CityTitle";
import WeatherDetails from "./WeatherDetails";

type WeatherSectionProps = {
  city: string;
  countryCode: string;
  temperature: number;
  condition: string;
  windSpeed: number;
};

const regionNames = { of: (code: string) => code };

const WeatherSection = ({
  city,
  countryCode,
  temperature,
  condition,
  windSpeed,
}: Partial<WeatherSectionProps>) => {
  const temperatureText = temperature ? Math.ceil(temperature) : "-";
  const regionName = countryCode ? regionNames.of(countryCode) : "-";

  return (
    <View style={styles.container}>
      <CityTitle style={styles.title} city={city} country={regionName} />
      <WeatherDetails
        temperature={temperature}
        condition={condition}
        windSpeed={windSpeed}
      />
    </View>
  );
};

export default WeatherSection;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "33%",
    width: "150%",
    height: "68%",
    borderTopRightRadius: 500,
  },
  title: {
    position: "absolute",
    top: 75,
    left: 5,
  },
});
