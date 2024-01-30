import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useThemeColor } from "../Themed";
import { Icon } from "./index";

const Search = ({
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
      viewBox="0 0 18 18"
      fill="none"
      stroke={strokeName}
      {...props}
    >
      <Path
        d="M11.71 11.5h.583l4.49 4.5-.783.783-4.5-4.49V11.508l-.14-.145-.081-.084.084.08.145.141h.202zm-.958-.748l-.348.299A5.971 5.971 0 016.5 12.5a6 6 0 116-6 5.971 5.971 0 01-1.45 3.904l-.298.348zM1.5 6.5c0 2.766 2.234 5 5 5s5-2.234 5-5-2.234-5-5-5-5 2.234-5 5z"
        stroke={colorName}
      />
    </Svg>
  );
};

export default Search;
