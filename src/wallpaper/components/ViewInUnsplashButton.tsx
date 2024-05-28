import SquareButton from "@/components/buttons/SquareButton";
import { Globe } from "@/components/icons/Globe";
import { Text } from "@/components/text/Text";
import Colors from "@/constants/Colors";
import i18n from "@/i18n";
import React from "react";
import { Linking, StyleSheet, View } from "react-native";

const BUTTON_ICON_SIZE = 35;

interface ViewInUnsplashButtonProps {
  unsplashUrl: string;
}

export const ViewInUnsplashButton = ({
  unsplashUrl,
}: ViewInUnsplashButtonProps) => {
  const goToUnsplash = () => {
    Linking.openURL(unsplashUrl);
  };

  return (
    <SquareButton style={styles.default} onClick={goToUnsplash} isSecondary>
      <View style={styles.buttonContent}>
        <Globe size={BUTTON_ICON_SIZE} lightColor={Colors.palette.white} />
        <Text lightColor={Colors.palette.white}>
          {i18n.t("viewInUnsplash")}
        </Text>
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
