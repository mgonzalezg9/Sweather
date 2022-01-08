import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { View } from "../../components/view/View";
import { Text } from "../../components/text/Text";
import CityTitle from "./CityTitle";

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
  return (
    <View style={styles.container}>
      <CityTitle style={styles.title} city={city} country={countryCode} />
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
    marginTop: 75,
    marginLeft: 5,
  },
});
