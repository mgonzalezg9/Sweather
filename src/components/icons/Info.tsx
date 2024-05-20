import { Icon } from "@/interfaces";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { useThemeColor } from "../Themed";

export const Info = ({
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
        d="M8.5 4.5H11.5V7.5H8.5V4.5ZM8.5 9.2768H11.5V15.5H8.5V9.2768ZM10 0.276802C4.48 0.276802 0 4.7568 0 10.2768C0 15.7968 4.48 20.2768 10 20.2768C15.52 20.2768 20 15.7968 20 10.2768C20 4.7568 15.52 0.276802 10 0.276802ZM10 18.2768C5.59 18.2768 2 14.6868 2 10.2768C2 5.8668 5.59 2.2768 10 2.2768C14.41 2.2768 18 5.8668 18 10.2768C18 14.6868 14.41 18.2768 10 18.2768Z"
        fill={colorName === "#fff" ? "#fffffe" : colorName}
      />
    </Svg>
  );
};
