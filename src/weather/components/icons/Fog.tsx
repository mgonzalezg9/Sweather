import { Icon } from "@/interfaces/icon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useThemeColor } from "../../../components/Themed";

const Fog = ({
  width,
  height,
  darkColor,
  lightColor,
  lightStroke,
  darkStroke,
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
      fill="none"
      {...props}
    >
      <Path
        d="M21 10H3M21 6H3M21 14H3M21 18H3"
        fill={colorName}
        stroke={strokeName}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Fog;
