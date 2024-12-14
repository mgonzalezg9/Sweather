import { CurvedThemedView, DownloadArrowIcon, GlobeIcon, SquareButton, Text } from "@/components";
import Colors from "@/constants/Colors";
import { useSaveImage } from "@/hooks";
import i18n from "@/i18n";
import React, { useEffect } from "react";
import {
  Image,
  Linking,
  StyleProp,
  StyleSheet,
  ToastAndroid,
  View,
  ViewStyle,
} from "react-native";
import { Wallpaper } from "../interfaces";

interface WallpaperAuthorInfoProps {
  style?: StyleProp<ViewStyle>;
  wallpaper: Wallpaper;
}

export const WallpaperAuthorInfo = (props: WallpaperAuthorInfoProps) => {
  // PROPS
  const { wallpaper, style } = props;
  const { details, uri } = wallpaper;

  if (!details) {
    return null;
  }

  // HOOKS
  const { error, isSaving, isSuccess, save } = useSaveImage({
    imageURL: uri,
    fileName: details?.slug || "wallpaper",
    albumName: "Sweather Wallpaper",
  });

  // EFFECTS
  useEffect(() => {
    if (error) {
      ToastAndroid.show(error, ToastAndroid.LONG);
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      ToastAndroid.show("Wallpaper saved successfully", ToastAndroid.SHORT);
    }
  }, [isSuccess]);

  // VARS
  const combinedStyle = StyleSheet.flatten([styles.default, style]);

  return (
    <CurvedThemedView style={combinedStyle}>
      <View style={styles.userDetails}>
        <Image
          source={{ uri: details.author.image }}
          style={styles.authorImage}
        />
        <View>
          <Text style={[styles.authorName, styles.clipText]} numberOfLines={1}>
            {details.author.name}
          </Text>
          <Text
            style={[styles.authorUsername, styles.clipText]}
            numberOfLines={1}
          >
            @{details.author.username}
          </Text>
        </View>
      </View>
      <View style={styles.wallpaperActions}>
        <SquareButton style={styles.button} loading={isSaving} onClick={save}>
          <View style={styles.buttonContent}>
            <DownloadArrowIcon size={35} lightColor={Colors.palette.white} />
            <Text lightColor={Colors.palette.white}>
              {i18n.t("downloadWallpaper")}
            </Text>
          </View>
        </SquareButton>

        <SquareButton
          style={styles.button}
          onClick={() => {
            Linking.openURL(details.unsplashUrl);
          }}
          isSecondary
        >
          <View style={styles.buttonContent}>
            <GlobeIcon size={35} lightColor={Colors.palette.white} />
            <Text lightColor={Colors.palette.white}>
              {i18n.t("viewInUnsplash")}
            </Text>
          </View>
        </SquareButton>
      </View>
    </CurvedThemedView>
  );
};

// STYLES
const PROFILE_IMAGE_SIZE = 50;

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
  authorImage: {
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    borderRadius: PROFILE_IMAGE_SIZE / 2,
  },
  authorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  authorUsername: {
    fontSize: 14,
  },
  clipText: {
    maxWidth: 225,
  },
  wallpaperActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  button: {
    width: 150,
  },
  buttonContent: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
