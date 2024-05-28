import { Text } from "@/components/text/Text";
import { CurvedThemedView } from "@/components/view/CurvedThemeView";
import React from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Wallpaper } from "../interfaces";
import { DownloadWallpaperButton } from "./DownloadWallpaperButton";
import { ViewInUnsplashButton } from "./ViewInUnsplashButton";

const PROFILE_IMAGE_SIZE = 50;

interface WallpaperAuthorInfoProps {
  style?: StyleProp<ViewStyle>;
  wallpaper: Wallpaper;
}

export const WallpaperAuthorInfo = ({
  style,
  wallpaper,
}: WallpaperAuthorInfoProps) => {
  const combinedStyle = StyleSheet.flatten([styles.default, style]);
  const details = wallpaper.details;

  if (!details) {
    return null;
  }

  return (
    <CurvedThemedView style={combinedStyle}>
      <View style={styles.userDetails}>
        <Image
          source={{ uri: details.author.image }}
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>{details.author.name}</Text>
          <Text style={styles.userAlias}>@{details.author.username}</Text>
        </View>
      </View>
      <View style={styles.wallpaperActions}>
        <DownloadWallpaperButton wallpaper={wallpaper} />
        <ViewInUnsplashButton unsplashUrl={details.unsplashUrl} />
      </View>
    </CurvedThemedView>
  );
};

const styles = StyleSheet.create({
  default: {
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  userImage: {
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    borderRadius: PROFILE_IMAGE_SIZE / 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userAlias: {
    fontSize: 14,
  },
  wallpaperActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
