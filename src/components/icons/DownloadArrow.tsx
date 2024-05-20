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
      viewBox="0 0 18 20"
      fill="none"
      stroke={strokeName}
      {...props}
    >
      <Path
        d="M14.4021 7.05882H12.5315V1.17647C12.5315 0.529412 12.0021 0 11.355 0H6.64914C6.00208 0 5.47267 0.529412 5.47267 1.17647V7.05882H3.60208C2.55502 7.05882 2.02561 8.32941 2.76678 9.07059L8.16678 14.4706C8.62561 14.9294 9.36678 14.9294 9.82561 14.4706L15.2256 9.07059C15.9668 8.32941 15.4491 7.05882 14.4021 7.05882ZM0.766785 18.8235C0.766785 19.4706 1.2962 20 1.94326 20H16.0609C16.708 20 17.2374 19.4706 17.2374 18.8235C17.2374 18.1765 16.708 17.6471 16.0609 17.6471H1.94326C1.2962 17.6471 0.766785 18.1765 0.766785 18.8235Z"
        fill={colorName === "#fff" ? "#fffffe" : colorName}
      />
    </Svg>
  );
};
