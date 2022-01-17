import Cloud from "../../components/icons/cloud";
import Rain from "../../components/icons/rain";
import Snow from "../../components/icons/snow";
import Storm from "../../components/icons/storm";
import Sun from "../../components/icons/sun";
import Wind from "../../components/icons/wind";
import Colors from "../../constants/Colors";

const ICON_SIZE = 17;

const ICON_DEFAULT_PROPS = {
  width: ICON_SIZE,
  height: ICON_SIZE,
  lightColor: "white",
  darkColor: "black",
};

export const ConditionMap = {
  Clouds: (
    <Cloud
      lightStroke={Colors.palette.grey}
      darkStroke={Colors.palette.grey}
      {...ICON_DEFAULT_PROPS}
    />
  ),
  Fog: (
    <Cloud
      lightStroke={Colors.palette.grey}
      darkStroke={Colors.palette.grey}
      {...ICON_DEFAULT_PROPS}
    />
  ),
  Rain: (
    <Rain
      lightStroke={Colors.palette.lightBlue}
      darkStroke={Colors.palette.lightBlue}
      {...ICON_DEFAULT_PROPS}
    />
  ),
  Snow: (
    <Snow
      lightStroke={Colors.palette.grey}
      darkStroke={Colors.palette.grey}
      {...ICON_DEFAULT_PROPS}
    />
  ),
  Clear: (
    <Sun
      lightStroke={Colors.palette.yellow}
      darkStroke={Colors.palette.yellow}
      {...ICON_DEFAULT_PROPS}
    />
  ),
  Storm: (
    <Storm
      lightStroke={Colors.palette.yellow}
      darkStroke={Colors.palette.yellow}
      {...ICON_DEFAULT_PROPS}
    />
  ),
  Wind: (
    <Wind
      lightStroke={Colors.palette.deepBlue}
      darkStroke={Colors.palette.deepBlue}
      {...ICON_DEFAULT_PROPS}
    />
  ),
};
