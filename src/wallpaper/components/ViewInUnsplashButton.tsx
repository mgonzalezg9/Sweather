import SquareButton from "@/components/buttons/SquareButton";
import { Globe } from "@/components/icons/Globe";
import { Text } from "@/components/text/Text";
import i18n from "@/i18n";
import React from "react";
import { Linking, StyleSheet, View } from "react-native";

const BUTTON_ICON_SIZE = 35;

interface ViewInUnsplashButtonProps {
  url: string;
}

export const ViewInUnsplashButton = ({ url }: ViewInUnsplashButtonProps) => {
  const goToUnsplash = () => {
    Linking.openURL(url);
  };

  return (
    <SquareButton style={styles.default} onClick={goToUnsplash}>
      <View style={styles.buttonContent}>
        <Globe size={BUTTON_ICON_SIZE} />
        <Text>{i18n.t("viewInUnsplash")}</Text>
      </View>
    </SquareButton>
  );
};

const styles = StyleSheet.create({
  default: {
    width: 225,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
});
