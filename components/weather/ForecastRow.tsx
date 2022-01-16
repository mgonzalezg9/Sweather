import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { Condition } from "../../services/weather/types";
import TimeWeather from "./TimeWeather";

type Forecast = {
  time: string;
  temperature: number;
  condition: Condition;
};

type ForecastRowProps = {
  forecast: Forecast[];
};

const ForecastRow = ({ forecast }: Partial<ForecastRowProps>) => {
  if (!forecast) {
    return null;
  }

  return (
    <DefaultView style={styles.container}>
      {forecast.map((f) => (
        <TimeWeather
          temperature={f.temperature}
          condition={f.condition}
          time={f.time}
        />
      ))}
    </DefaultView>
  );
};

export default ForecastRow;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 70,
    marginLeft: 5,
    flex: 1,
    flexDirection: "row",
  },
});
