import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useThemeColor } from "../Themed";

type SquareButtonType = {
  icon?: JSX.Element;
  onClick: () => void;
};

const SquareButton = ({ icon, onClick, ...props }: SquareButtonType) => {
  const backgroundColor = useThemeColor({}, "tint");

  return (
    <TouchableOpacity
      style={[styles.outline, { backgroundColor }]}
      onPress={onClick}
      {...props}
    >
      <View style={styles.button}>{icon}</View>
    </TouchableOpacity>
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
    padding: 5,
  },
});

export default SquareButton;
