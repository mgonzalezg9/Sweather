import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useThemeColor } from "../Themed";

type SquareButtonType = {
  icon?: JSX.Element;
  onClick: () => void;
};

const SquareButton = ({ icon, onClick, ...props }: SquareButtonType) => {
  const backgroundColor = useThemeColor({}, "tint");

  return (
    <Pressable
      style={[styles.outline, { backgroundColor }]}
      onPress={onClick}
      {...props}
    >
      <View style={styles.button}>{icon}</View>
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
