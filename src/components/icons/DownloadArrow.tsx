import { Icon } from "@/interfaces";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { useThemeColor } from "../Themed";

export const DownloadArrow = ({
  size,
  darkColor,
  lightColor,
  ...props
}: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <MaterialIcons name="download" size={size} color={colorName} {...props} />
  );
};
