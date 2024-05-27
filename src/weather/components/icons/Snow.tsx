import { useThemeColor } from "@/components/Themed";
import { Icon } from "@/interfaces/icon";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";

const Snow = ({ size, darkColor, lightColor, ...props }: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return <Feather name="cloud-snow" size={size} color={colorName} {...props} />;
};

export default Snow;
