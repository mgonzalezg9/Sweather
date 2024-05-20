import { useThemeColor } from "@/components/Themed";
import { Icon } from "@/interfaces/icon";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const Rain = ({
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
        clipPath="url(#clip0_103_118)"
        stroke={strokeName}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M8 19v2M8 13v2M16 19v2M16 13v2M12 21v2M12 15v2M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
      </G>
      <Defs>
        <ClipPath id="clip0_103_118">
          <Path fill={colorName} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Rain;
