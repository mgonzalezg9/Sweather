import { Text } from "@/components/text/Text";
import { CurvedThemedView } from "@/components/view/CurvedThemeView";
import React from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { ViewInUnsplashButton } from "./ViewInUnsplashButton";

const PROFILE_IMAGE_SIZE = 50;

interface WallpaperAuthorInfoProps {
  style?: StyleProp<ViewStyle>;
  name: string;
  alias: string;
  profileImage: string;
  profileUrl: string;
}

export const WallpaperAuthorInfo = ({
  name,
  alias,
  profileImage,
  profileUrl,
  style,
}: WallpaperAuthorInfoProps) => {
  const combinedStyle = StyleSheet.flatten([styles.default, style]);

  return (
    <CurvedThemedView style={combinedStyle}>
      <View style={styles.userDetails}>
        <Image source={{ uri: profileImage }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userAlias}>{alias}</Text>
        </View>
      </View>
      <ViewInUnsplashButton url={profileUrl} />
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
});
