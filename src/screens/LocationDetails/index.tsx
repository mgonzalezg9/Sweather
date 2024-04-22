import { RootStackScreenProps } from "@/navigation/types.d";
import { ImageBackground, StyleSheet } from "react-native";
import WeatherSection from "./WeatherSection";

export default function LocationDetailsScreen({
  route: { params },
}: RootStackScreenProps<"LocationDetails">) {
  const { weather, forecast, wallpaper } = params;

  return (
    <ImageBackground source={wallpaper} style={styles.backgroundImage}>
      <WeatherSection weather={weather} forecast={forecast} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});
