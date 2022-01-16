import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { Condition } from "../../services/weather/types";
import { ConditionMap } from "../../services/weather/map";
import { Text } from "../text/Text";

type TimeWeatherProps = {
  time: string;
  temperature: number;
  condition: Condition;
};

const TimeWeather = ({
  time,
  condition,
  temperature,
  ...props
}: TimeWeatherProps) => {
  const computedTime = time.slice(10, 16);
  const computedTemperature = Math.ceil(temperature);
  const ComputedIcon = ConditionMap[condition];

  return (
    <DefaultView style={styles.container} {...props}>
      <Text style={styles.timeContainer}>{computedTime}</Text>
      {ComputedIcon}
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
    marginHorizontal: 7,
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
