import SquareButton from "@/components/buttons/SquareButton";
import { DownloadArrow } from "@/components/icons/DownloadArrow";
import { Text } from "@/components/text/Text";
import Colors from "@/constants/Colors";
import i18n from "@/i18n";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSaveWallpaper } from "../hooks/useSaveWallpaper";
import { Wallpaper } from "../interfaces";

const BUTTON_ICON_SIZE = 35;

interface DownloadWallpaperButtonProps {
  wallpaper: Wallpaper;
}

export const DownloadWallpaperButton = ({
  wallpaper,
}: DownloadWallpaperButtonProps) => {
  // HOOKS
  const { saveWallpaper, isStoring, error } = useSaveWallpaper();

  // EFFECTS
  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <SquareButton
      style={styles.default}
      onClick={() => saveWallpaper(wallpaper)}
      loading={isStoring}
    >
      <View style={styles.buttonContent}>
        <DownloadArrow
          size={BUTTON_ICON_SIZE}
          lightColor={Colors.palette.white}
        />
        <Text lightColor={Colors.palette.white}>
          {i18n.t("downloadWallpaper")}
        </Text>
      </View>
    </SquareButton>
  );
};

const styles = StyleSheet.create({
  default: {
    width: 125,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
});
