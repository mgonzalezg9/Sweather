import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Weather } from "../../services/weather/types";
import { Text } from "../text/Text";
import ConditionIcon from "./ConditionIcon";

type TimeWeatherProps = {
  temperature: Weather['temperature']['current'];
  condition: Weather['condition'];
} & Partial<Weather['time']>;

const TimeWeather = ({
  temperature,
  condition,
  now,
  sunrise,
  sunset,
  ...props
}: TimeWeatherProps) => {
  const computedTemperature = Math.ceil(temperature);

  return (
    <DefaultView style={styles.container} {...props}>
      <Text style={styles.timeContainer}>{now}</Text>
      <ConditionIcon
        width={25}
        height={25}
        condition={condition}
        now={now}
        sunrise={sunrise}
        sunset={sunset}
      />
      <Text style={styles.temperatureContainer}>{computedTemperature}º</Text>
    </DefaultView>
  );
};

export default TimeWeather;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 10,
  },
  timeContainer: {
    marginBottom: 25,
    fontSize: 16,
  },
  temperatureContainer: {
    marginTop: 25,
    fontSize: 16,
  },
});
