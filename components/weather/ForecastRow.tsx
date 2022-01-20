import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { Condition } from "./ConditionIcon";
import TimeWeather from "./TimeWeather";

type Forecast = {
  time: Date;
  temperature: number;
  condition: Condition;
};

type ForecastRowProps = {
  forecast: Forecast[];
  sunrise: Date;
  sunset: Date;
};

const ForecastRow = ({
  forecast,
  sunrise,
  sunset,
}: Partial<ForecastRowProps>) => {
  if (!forecast) {
    return null;
  }

  return (
    <DefaultView style={styles.container}>
      {forecast.map((f) => (
        <TimeWeather
          key={f.time.getTime()}
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
