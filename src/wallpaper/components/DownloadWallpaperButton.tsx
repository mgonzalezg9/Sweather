import SquareButton from "@/components/buttons/SquareButton";
import { DownloadArrow } from "@/components/icons/DownloadArrow";
import { Text } from "@/components/text/Text";
import Colors from "@/constants/Colors";
import i18n from "@/i18n";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSaveImage } from "../../hooks/useSaveImage";
import { Wallpaper } from "../interfaces";

const BUTTON_ICON_SIZE = 35;

interface DownloadWallpaperButtonProps {
  wallpaper: Wallpaper;
}

export const DownloadWallpaperButton = ({
  wallpaper,
}: DownloadWallpaperButtonProps) => {
  // HOOKS
  const { error, isSaving, save } = useSaveImage({
    imageURL: wallpaper.uri,
    fileName: wallpaper.details?.slug || "wallpaper",
    albumName: "Sweather Wallpaper",
  });

  // EFFECTS
  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <SquareButton style={styles.default} onClick={save} loading={isSaving}>
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
