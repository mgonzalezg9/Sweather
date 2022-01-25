import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View } from "../../components/view/View";
import { getLocalBackground } from "../../services/wallpaper";
import { RootStackScreenProps } from "../../types";
import WeatherSection from "./WeatherSection";

const localBackground = getLocalBackground();

export default function LocationDetailsScreen({
  route: { params },
}: RootStackScreenProps<"LocationDetails">) {
  // In case no bg is provided, it takes one from local
  const background = params.wallpaper || localBackground;
  const { weather, forecast } = params;

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.backgroundImage}>
        <WeatherSection weather={weather} forecast={forecast} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    height: "100%",
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});
