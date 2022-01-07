import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/view/View";
import { Text } from "../../components/text/Text";

type WeatherSectionProps = {
  city: string;
  countryCode: string;
  temperature: number;
  condition: string;
  windSpeed: number;
};

const WeatherSection = ({
  city,
  countryCode,
  temperature,
  condition,
  windSpeed,
}: Partial<WeatherSectionProps>) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftColumn}></View>
        <View style={styles.rightColumn}>
          <Text>Hey there</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    top: "33%",
    width: "150%",
    height: "68%",
    borderTopRightRadius: 500,
  },
  content: {
    position: "absolute",
    top: 10,
    flex: 1,
    flexDirection: "row",
  },
  rightColumn: {
    flex: 1,
  },
  leftColumn: {
    flex: 1,
  },
});
