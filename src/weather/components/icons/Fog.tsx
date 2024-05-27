import { useThemeColor } from "@/components/Themed";
import { Icon } from "@/interfaces";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";

const Fog = ({ size, darkColor, lightColor, ...props }: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return (
    <Feather name="align-justify" size={size} color={colorName} {...props} />
  );
};

export default Fog;
