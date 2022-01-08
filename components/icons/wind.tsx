import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useThemeColor } from "../Themed";
import { Icon } from "./index";

const Wind = ({
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
        d="M17.73 7.73A2.5 2.5 0 1119.5 12H2m7.59-7.41A2 2 0 1111 8H2l7.59-3.41zm3 14.82A2 2 0 1014 16H2l10.59 3.41z"
        stroke={strokeName}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Wind;
