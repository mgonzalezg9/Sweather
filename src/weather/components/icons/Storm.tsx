import { Icon } from "@/interfaces/icon";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import { useThemeColor } from "../../../components/Themed";

const Storm = ({
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
      <G
        clipPath="url(#clip0_103_126)"
        stroke={strokeName}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
        <Path d="M13 11l-4 6h6l-4 6" />
      </G>
      <Defs>
        <ClipPath id="clip0_103_126">
          <Path fill={colorName} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Storm;
