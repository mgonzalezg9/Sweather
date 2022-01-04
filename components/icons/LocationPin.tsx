import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Icon } from "./index";

const LocationPin = ({ width, height, color = "#fff", ...props }: Icon) => (
  <Svg width={width} height={height} viewBox="0 0 20 29" fill="none" {...props}>
    <Path
      d="M10 0C4.471 0 0 4.538 0 10.15 0 17.762 10 29 10 29s10-11.238 10-18.85C20 4.538 15.529 0 10 0zm0 13.775c-1.971 0-3.571-1.624-3.571-3.625S8.029 6.525 10 6.525s3.571 1.624 3.571 3.625-1.6 3.625-3.571 3.625z"
      fill={color}
    />
  </Svg>
);

export default LocationPin;
