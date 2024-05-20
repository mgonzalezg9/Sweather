import { Icon } from "@/interfaces";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { useThemeColor } from "../Themed";

export const DownloadArrow = ({
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
      viewBox="0 0 20 29"
      fill="none"
      stroke={strokeName}
      {...props}
    >
      <Path
        d="M9.20428 0H12.3293C12.8488 0 13.2668 0.417969 13.2668 0.9375V7.5H16.6926C17.3879 7.5 17.7355 8.33984 17.2433 8.83203L11.3019 14.7773C11.009 15.0703 10.5285 15.0703 10.2355 14.7773L4.28632 8.83203C3.79413 8.33984 4.14178 7.5 4.8371 7.5H8.26678V0.9375C8.26678 0.417969 8.68475 0 9.20428 0ZM20.7668 14.6875V19.0625C20.7668 19.582 20.3488 20 19.8293 20H1.70428C1.18475 20 0.766785 19.582 0.766785 19.0625V14.6875C0.766785 14.168 1.18475 13.75 1.70428 13.75H7.43475L9.34882 15.6641C10.134 16.4492 11.3996 16.4492 12.1848 15.6641L14.0988 13.75H19.8293C20.3488 13.75 20.7668 14.168 20.7668 14.6875ZM15.923 18.125C15.923 17.6953 15.5715 17.3438 15.1418 17.3438C14.7121 17.3438 14.3605 17.6953 14.3605 18.125C14.3605 18.5547 14.7121 18.9062 15.1418 18.9062C15.5715 18.9062 15.923 18.5547 15.923 18.125ZM18.423 18.125C18.423 17.6953 18.0715 17.3438 17.6418 17.3438C17.2121 17.3438 16.8605 17.6953 16.8605 18.125C16.8605 18.5547 17.2121 18.9062 17.6418 18.9062C18.0715 18.9062 18.423 18.5547 18.423 18.125Z"
        fill={colorName === "#fff" ? "#fffffe" : colorName}
      />
    </Svg>
  );
};
