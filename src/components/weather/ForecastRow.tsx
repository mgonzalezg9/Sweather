import { Forecast } from "@/services/weather/types";
import React from "react";
import { View as DefaultView, FlatList, StyleSheet } from "react-native";
import TimeWeather from "./TimeWeather";

const ForecastRow = ({ hours, sunrise, sunset }: Partial<Forecast>) => {
  if (!hours) {
    return null;
  }

  return (
    <DefaultView style={styles.forecastRow}>
      <FlatList
        data={hours}
        renderItem={({ item }) => (
          <TimeWeather
            key={item.time}
            temperature={item.temperature}
            condition={item.condition}
            now={item.time}
            sunrise={sunrise}
            sunset={sunset}
          />
        )}
        horizontal
      />
    </DefaultView>
  );
};

export default ForecastRow;

const styles = StyleSheet.create({
  forecastRow: {
    paddingHorizontal: 10,
  },
});
