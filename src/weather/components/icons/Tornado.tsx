import { Icon } from "@/interfaces/icon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useThemeColor } from "../../../components/Themed";

const Tornado = ({
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
      style={{
        width: "1em",
        height: "1em",
        verticalAlign: "middle",
      }}
      viewBox="0 0 1024 1024"
      fill={colorName}
      {...props}
    >
      <Path d="M426.667 896h-85.334a42.667 42.667 0 000 85.333h85.334a42.667 42.667 0 000-85.333zm42.666-170.667H256a42.667 42.667 0 000 85.334h213.333a42.667 42.667 0 000-85.334zM768 85.333a42.667 42.667 0 00-42.667-42.666H128A42.667 42.667 0 00128 128h597.333A42.667 42.667 0 00768 85.333zm128 128H256a42.667 42.667 0 000 85.334h640a42.667 42.667 0 000-85.334zM810.667 384h-384a42.667 42.667 0 000 85.333h384a42.667 42.667 0 000-85.333zM597.333 554.667h-256a42.667 42.667 0 000 85.333h256a42.667 42.667 0 000-85.333z" />
    </Svg>
  );
};

export default Tornado;
