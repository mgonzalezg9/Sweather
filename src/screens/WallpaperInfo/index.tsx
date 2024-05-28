import { RootStackScreenProps } from "@/navigation/types.d";
import { WallpaperAuthorInfo } from "@/wallpaper/components/WallpaperAuthorInfo";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";
import { BackButton } from "./BackButton";

const statusBarHeight = StatusBar.currentHeight ?? 0;

export default function WallpaperInfoScreen({
  route: { params },
}: RootStackScreenProps<"WallpaperInfo">) {
  const navigator = useNavigation();

  const { wallpaper } = params;

  return (
    <ImageBackground source={wallpaper} style={styles.backgroundImage}>
      <BackButton style={styles.goBackIcon} onClick={navigator.goBack} />
      <WallpaperAuthorInfo style={styles.authorInfo} wallpaper={wallpaper} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
  },
  downloadIcon: {
    position: "absolute",
    top: statusBarHeight + 10,
    right: 24,
  },
  goBackIcon: {
    position: "absolute",
    top: statusBarHeight + 10,
    left: 24,
  },
  authorInfo: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
