import { RootStackScreenProps } from "@/navigation/types.d";
import { WallpaperAuthorInfo } from "@/wallpaper/components/WallpaperAuthorInfo";
import { useWallpaperStorage } from "@/wallpaper/hooks/useWallpaperStorage";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";
import { BackButton } from "./BackButton";
import { DownloadButton } from "./DownloadButton";

const statusBarHeight = StatusBar.currentHeight ?? 0;

export default function WallpaperInfoScreen({
  route: { params },
}: RootStackScreenProps<"WallpaperInfo">) {
  const navigator = useNavigation();
  const { storeWallpaper } = useWallpaperStorage();

  const { wallpaper } = params;

  return (
    <ImageBackground source={wallpaper} style={styles.backgroundImage}>
      <BackButton style={styles.goBackIcon} onClick={navigator.goBack} />
      <DownloadButton
        style={styles.downloadIcon}
        onClick={() => storeWallpaper(wallpaper)}
      />
      <WallpaperAuthorInfo
        style={styles.authorInfo}
        name="Patricia Rodriguez"
        alias="patrimv97"
        profileImage="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        profileUrl="asdf"
      />
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
