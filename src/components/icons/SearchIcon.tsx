import { Icon } from "@/interfaces";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as React from "react";
import { useThemeColor } from "../Themed";

const SearchIcon = ({ size, darkColor, lightColor, ...props }: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <MaterialIcons name="search" size={size} color={colorName} {...props} />
  );
};

export default SearchIcon;
