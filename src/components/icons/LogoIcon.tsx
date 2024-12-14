import * as React from "react";
import Svg, { Ellipse, G, Path } from "react-native-svg";

// TODO: This library does not have support for SVG filters.
const LogoIcon = ({ width = 169, height = 134, color = "none" }) => (
  <Svg width={width} height={height} viewBox="0 0 169 134" fill={color}>
    <Path d="M120.309 131H36.869V60.3431L120.309 52.4923V131Z" fill="#F9F9F9" />
    <G>
      <Ellipse
        cx="96.5387"
        cy="46.1923"
        rx="41.2351"
        ry="41.1923"
        fill="#F9F9F9"
      />
    </G>
    <G>
      <Ellipse
        cx="119.339"
        cy="87.3846"
        rx="43.6607"
        ry="43.6154"
        fill="#F9F9F9"
      />
    </G>
    <G>
      <Ellipse
        cx="39.2946"
        cy="91.7462"
        rx="39.2946"
        ry="39.2538"
        fill="#F9F9F9"
      />
    </G>
  </Svg>
);

export default LogoIcon;
