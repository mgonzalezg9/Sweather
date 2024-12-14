import { Icon } from "@/interfaces";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { useThemeColor } from "../Themed";

const ArrowLeftIcon = ({ size, darkColor, lightColor, ...props }: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <MaterialCommunityIcons
      name="arrow-left"
      size={size}
      color={colorName}
      {...props}
    />
  );
};

export default ArrowLeftIcon;