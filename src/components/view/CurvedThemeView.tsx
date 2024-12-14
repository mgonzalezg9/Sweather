import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import ThemedView from "./View";

interface CurvedThemedViewProps {
  curve?: number;
  style?: StyleProp<ViewStyle>;
}

 const CurvedThemedView = ({
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

export default CurvedThemedView;