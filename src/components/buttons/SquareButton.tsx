import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useThemeColor } from "../Themed";

type SquareButtonProps = {
  icon?: JSX.Element;
  onClick: () => void;
};

const SquareButton = ({
  icon,
  onClick,
  children,
  ...props
}: React.PropsWithChildren<SquareButtonProps>) => {
  const backgroundColor = useThemeColor({}, "tint");

  return (
    <Pressable
      style={[styles.outline, { backgroundColor }]}
      onPress={onClick}
      {...props}
    >
      <View style={styles.button}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outline: {
    padding: 5,
    width: 50,
    height: 50,
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
