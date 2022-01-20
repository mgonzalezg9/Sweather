import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { formatTwoDigits } from "../../utils/date";
import { Text } from "../text/Text";
import ConditionIcon, { Condition } from "./ConditionIcon";

type TimeWeatherProps = {
  time: Date;
  temperature: number;
  condition: Condition;
  sunrise?: Date;
  sunset?: Date;
};

const TimeWeather = ({
  time,
  condition,
  temperature,
  sunrise,
  sunset,
  ...props
}: TimeWeatherProps) => {
  const computedTime = `${formatTwoDigits(time.getHours())}:${formatTwoDigits(
    time.getMinutes()
  )}`;
  const computedTemperature = Math.ceil(temperature);

  return (
    <DefaultView style={styles.container} {...props}>
      <Text style={styles.timeContainer}>{computedTime}</Text>
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
