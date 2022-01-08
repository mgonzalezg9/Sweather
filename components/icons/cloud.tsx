import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { useThemeColor } from "../Themed";
import { Icon } from "./index";

const Cloud = ({
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
      <G clipPath="url(#clip0_103_116)">
        <Path
          d="M18.006 10h-1.26a8 8 0 10-7.74 10h9a5 5 0 000-10z"
          stroke={strokeName}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_103_116">
          <Path fill={colorName} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Cloud;
