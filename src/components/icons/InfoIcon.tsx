import { Icon } from "@/interfaces";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { useThemeColor } from "../Themed";

const InfoIcon = ({ size, darkColor, lightColor, ...props }: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return <MaterialIcons name="info" size={size} color={colorName} {...props} />;
};

export default InfoIcon;