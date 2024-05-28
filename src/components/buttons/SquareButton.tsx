import Colors from "@/constants/Colors";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type SquareButtonProps = {
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  isSecondary?: boolean;
  onClick: () => void;
};

const SquareButton = ({
  onClick,
  loading,
  isSecondary,
  children,
  style,
  ...props
}: React.PropsWithChildren<SquareButtonProps>) => {
  const backgroundColor = isSecondary
    ? Colors.palette.deepBlue
    : Colors.palette.orange;
  const combinedStyle = StyleSheet.flatten([
    styles.outline,
    { backgroundColor },
    style,
  ]);

  return (
    <Pressable style={combinedStyle} onPress={onClick} {...props}>
      <View style={styles.button}>
        {loading ? (
          <ActivityIndicator color={Colors.palette.white} />
        ) : (
          children
        )}
      </View>
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
