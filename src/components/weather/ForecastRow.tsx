import { Forecast } from "@/services/weather/types";
import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import TimeWeather from "./TimeWeather";

const ForecastRow = ({ hours, sunrise, sunset }: Partial<Forecast>) => {
  if (!hours) {
    return null;
  }

  return (
    <DefaultView style={styles.container}>
      {hours.map((f) => (
        <TimeWeather
          key={f.time}
          temperature={f.temperature}
          condition={f.condition}
          now={f.time}
          sunrise={sunrise}
          sunset={sunset}
        />
      ))}
    </DefaultView>
  );
};

export default ForecastRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
