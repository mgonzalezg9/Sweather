import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { Text } from "../../components/text/Text";
import { Condition } from "../../components/weather/ConditionIcon";
import ConditionRow from "./ConditionRow";

type WeatherDetailsProps = {
  temperature: number;
  condition: string;
  windSpeed: number;
  time: {
    now: Date;
    sunrise: Date;
    sunset: Date;
  };
};

const WeatherDetails = ({
  temperature,
  condition,
  windSpeed,
  time,
}: Partial<WeatherDetailsProps>) => {
  const temperatureText = temperature ? Math.ceil(temperature) : "-";

  return (
    <DefaultView style={styles.container}>
      <Text style={styles.temperatureText}>{temperatureText}º</Text>
      <DefaultView style={styles.main}>
        <ConditionRow
          condition={condition as Condition}
          time={time?.now}
          sunrise={time?.sunrise}
          sunset={time?.sunset}
        />
        <ConditionRow condition="Wind" text={`${windSpeed} m/s`} />
      </DefaultView>
    </DefaultView>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 150,
    marginLeft: 5,
    flex: 1,
    flexDirection: "row",
  },
  temperatureText: {
    fontSize: 100,
    marginLeft: 15,
  },
  main: {
    flexDirection: "column",
    marginTop: 25,
  },
});
