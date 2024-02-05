import { ImageBackground, StyleSheet } from "react-native";
import { View } from "../../components/view/View";
import { RootStackScreenProps } from "../../types";
import WeatherSection from "./WeatherSection";

export default function LocationDetailsScreen({
  route: { params },
}: RootStackScreenProps<"LocationDetails">) {
  const { weather, forecast, wallpaper } = params

  return (
    <View style={styles.container}>
      <ImageBackground source={wallpaper} style={styles.backgroundImage}>
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
