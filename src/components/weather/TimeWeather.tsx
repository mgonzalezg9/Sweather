import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Text } from "../text/Text";
import ConditionIcon, { Condition } from "./ConditionIcon";

type TimeWeatherProps = {
  time: string;
  temperature: number;
  condition: Condition;
  sunrise?: string;
  sunset?: string;
};

const TimeWeather = ({
  time,
  condition,
  temperature,
  sunrise,
  sunset,
  ...props
}: TimeWeatherProps) => {
  const computedTemperature = Math.ceil(temperature);

  return (
    <DefaultView style={styles.container} {...props}>
      <Text style={styles.timeContainer}>{time}</Text>
      <ConditionIcon
        width={25}
        height={25}
        condition={condition}
        sunrise={sunrise}
        sunset={sunset}
        time={time}
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
