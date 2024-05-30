import { Text } from "@/components/text/Text";
import useDeviceLocales from "@/i18n/hooks/useDeviceLocales";
import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Weather } from "../interfaces";
import { formatDate } from "../utils/time";
import ConditionIcon from "./ConditionIcon";

type TimeWeatherProps = {
  temperature: Weather["temperature"]["current"];
  condition: Weather["condition"];
} & Weather["time"];

const TimeWeather = ({
  temperature,
  condition,
  now,
  sunrise,
  sunset,
  ...props
}: TimeWeatherProps) => {
  const { locale, timeZone } = useDeviceLocales();

  const computedTemperature = Math.ceil(temperature);
  const time = formatDate({
    time: new Date(now),
    locale,
    timeZone,
  });

  return (
    <DefaultView style={styles.container} {...props}>
      <Text style={styles.timeWeatherText}>{time}</Text>
      <ConditionIcon
        size={32}
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
