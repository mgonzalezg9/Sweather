import { Icon } from "@/interfaces/icon";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import { useThemeColor } from "../../../components/Themed";

const Snow = ({
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
        clipPath="url(#clip0_103_133)"
        stroke={strokeName}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01" />
      </G>
      <Defs>
        <ClipPath id="clip0_103_133">
          <Path fill={colorName} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Snow;
