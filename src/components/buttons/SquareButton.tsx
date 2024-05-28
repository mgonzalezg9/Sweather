import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../Themed";

type SquareButtonProps = {
  style?: StyleProp<ViewStyle>;
  icon?: JSX.Element;
  onClick: () => void;
};

const SquareButton = ({
  icon,
  onClick,
  children,
  style,
  ...props
}: React.PropsWithChildren<SquareButtonProps>) => {
  const backgroundColor = useThemeColor({}, "tint");
  const combinedStyle = StyleSheet.flatten([
    styles.outline,
    { backgroundColor },
    style,
  ]);

  return (
    <Pressable style={combinedStyle} onPress={onClick} {...props}>
      <View style={styles.button}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outline: {
    minWidth: 50,
    height: 50,
    padding: 5,
    borderRadius: 10,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default SquareButton;
