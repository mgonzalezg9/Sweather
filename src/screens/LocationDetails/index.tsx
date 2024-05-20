import { RootStackScreenProps } from "@/navigation/types.d";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";
import { InformationButton } from "./InformationButton";
import WeatherSection from "./WeatherSection";

export default function LocationDetailsScreen({
  route: { params },
}: RootStackScreenProps<"LocationDetails">) {
  const { weather, forecast, wallpaper } = params;

  const handleClick = () => {
    console.log("Download clicked");
  };

  return (
    <ImageBackground source={wallpaper} style={styles.backgroundImage}>
      <InformationButton style={styles.downloadIcon} onClick={handleClick} />
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
  downloadIcon: {
    position: "absolute",
    top: StatusBar.currentHeight,
    right: 24,
  },
});
