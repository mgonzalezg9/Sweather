import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Forecast } from "../../services/weather/types";
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
          time={f.time}
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
    position: "relative",
    top: 40,
    marginLeft: 5,
    flex: 1,
    flexDirection: "row",
  },
});
