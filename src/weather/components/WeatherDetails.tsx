import { Text } from "@/components/text/Text";
import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Weather } from "../interfaces";
import ConditionRow from "./ConditionRow";

type WeatherDetailsProps = {
  temperature: Weather["temperature"]["current"];
  windSpeed: Weather["wind"];
  condition: Weather["condition"];
  time: Weather["time"];
};

const WeatherDetails = ({
  temperature,
  condition,
  windSpeed,
  time,
}: WeatherDetailsProps) => {
  const temperatureText = temperature ? Math.ceil(temperature) : "-";

  return (
    <DefaultView style={styles.container}>
      <Text style={styles.temperatureText}>{temperatureText}º</Text>
      <DefaultView style={styles.main}>
        <ConditionRow
          condition={condition}
          now={time.now}
          sunrise={time.sunrise}
          sunset={time.sunset}
        />
        <ConditionRow
          condition="Wind"
          text={`${windSpeed} m/s`}
          now={time.now}
          sunrise={time.sunrise}
          sunset={time.sunset}
        />
      </DefaultView>
    </DefaultView>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  temperatureText: {
    fontSize: 115,
    marginLeft: 15,
  },
  main: {
    flexDirection: "column",
    marginTop: 25,
  },
});
