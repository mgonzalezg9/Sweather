import { RootStackScreenProps } from "@/navigation/types.d";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";
import { InformationButton } from "./InformationButton";
import WeatherSection from "./WeatherSection";

const statusBarHeight = StatusBar.currentHeight ?? 0;

export default function LocationDetailsScreen({
  route: { params },
}: RootStackScreenProps<"LocationDetails">) {
  const { weather, forecast, wallpaper } = params;
  const navigation = useNavigation();

  const goToWallpaperInfo = () => {
    navigation.navigate("WallpaperInfo", {
      wallpaper,
    });
  };

  return (
    <ImageBackground source={wallpaper} style={styles.backgroundImage}>
      <InformationButton
        style={styles.informationIcon}
        onClick={goToWallpaperInfo}
      />
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
  informationIcon: {
    position: "absolute",
    top: statusBarHeight + 10,
    right: 24,
  },
});
