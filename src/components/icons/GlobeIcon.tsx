import { Icon } from "@/interfaces";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { useThemeColor } from "../Themed";

const GlobeIcon = ({ size, darkColor, lightColor, ...props }: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <MaterialCommunityIcons
      name="earth"
      size={size}
      color={colorName}
      {...props}
    />
  );
};

export default GlobeIcon;