import { Text } from "@/components/text/Text";
import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Weather } from "../interfaces";
import ConditionIcon from "./ConditionIcon";

type TimeWeatherProps = {
  temperature: Weather["temperature"]["current"];
  condition: Weather["condition"];
} & Partial<Weather["time"]>;

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
      <Text style={styles.timeWeatherText}>{now}</Text>
      <ConditionIcon
        width={25}
        height={25}
        condition={condition}
        now={now}
        sunrise={sunrise}
        sunset={sunset}
      />
      <Text style={styles.timeWeatherText}>{computedTemperature}º</Text>
    </DefaultView>
  );
};

export default TimeWeather;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 115,
    minWidth: 75,
  },
  timeWeatherText: {
    fontSize: 16,
  },
});
