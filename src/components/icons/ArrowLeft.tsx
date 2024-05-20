import { Icon } from "@/interfaces";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { useThemeColor } from "../Themed";

export const ArrowLeft = ({
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
      viewBox="0 0 20 21"
      fill="none"
      stroke={strokeName}
      {...props}
    >
      <Path
        d="M20 9.0268H4.7875L11.775 2.0393L10 0.276802L0 10.2768L10 20.2768L11.7625 18.5143L4.7875 11.5268H20V9.0268Z"
        fill={colorName === "#fff" ? "#fffffe" : colorName}
      />
    </Svg>
  );
};
