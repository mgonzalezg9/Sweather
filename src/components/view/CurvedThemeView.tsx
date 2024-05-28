import { View as ThemedView } from "@/components/view/View";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface CurvedThemedViewProps {
  curve?: number;
  style?: StyleProp<ViewStyle>;
}

export const CurvedThemedView = ({
  children,
  curve = 400,
  style,
}: React.PropsWithChildren<CurvedThemedViewProps>) => {
  const combinedStyle = StyleSheet.flatten([
    { borderTopRightRadius: curve },
    style,
  ]);

  return <ThemedView style={combinedStyle}>{children}</ThemedView>;
};
