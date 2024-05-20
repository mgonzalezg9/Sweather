import { Icon } from "@/interfaces/icon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useThemeColor } from "../../../components/Themed";

const Moon = ({
  width,
  height,
  darkColor,
  lightColor,
  darkStroke,
  lightStroke,
  ...props
}: Icon) => {
  const colorName = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  const strokeName = useThemeColor(
    { light: lightStroke, dark: darkStroke },
    "text"
  );

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={colorName}
      {...props}
    >
      <Path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z"
        stroke={strokeName}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Moon;
