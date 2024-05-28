import SquareButton from "@/components/buttons/SquareButton";
import { DownloadArrow } from "@/components/icons/DownloadArrow";
import { Text } from "@/components/text/Text";
import i18n from "@/i18n";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useWallpaperStorage } from "../hooks/useWallpaperStorage";
import { Wallpaper } from "../interfaces";

const BUTTON_ICON_SIZE = 35;

interface DownloadWallpaperButtonProps {
  wallpaper: Wallpaper;
}

export const DownloadWallpaperButton = ({
  wallpaper,
}: DownloadWallpaperButtonProps) => {
  const { storeWallpaper } = useWallpaperStorage();

  return (
    <SquareButton
      style={styles.default}
      onClick={() => storeWallpaper(wallpaper)}
    >
      <View style={styles.buttonContent}>
        <DownloadArrow size={BUTTON_ICON_SIZE} />
        <Text>{i18n.t("downloadWallpaper")}</Text>
      </View>
    </SquareButton>
  );
};

const styles = StyleSheet.create({
  default: {
    width: 150,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
});