import { Icon } from "@/interfaces";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { useThemeColor } from "../Themed";

const DownloadArrowIcon = ({
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

export default DownloadArrowIcon;