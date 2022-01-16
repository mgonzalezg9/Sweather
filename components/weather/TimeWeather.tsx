import React from "react";
import { StyleSheet, View as DefaultView, Text } from "react-native";
import { Condition } from "../../services/weather/types";
import { ConditionMap } from "../../services/weather/map";

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
  const ComputedIcon = ConditionMap[condition];

  return (
    <DefaultView style={styles.container} {...props}>
      <Text style={styles.timeContainer}>{time}</Text>
      {ComputedIcon}
      <Text style={styles.temperatureContainer}>{temperature}º</Text>
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
  },
  temperatureContainer: {
    marginTop: 25,
  },
});
