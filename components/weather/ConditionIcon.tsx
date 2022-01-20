import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "../icons";
import Cloud from "../icons/Cloud";
import Rain from "../icons/Rain";
import Snow from "../icons/Snow";
import Sun from "../icons/Sun";
import Storm from "../icons/Storm";
import Wind from "../icons/Wind";
import Colors from "../../constants/Colors";
import Moon from "../icons/Moon";

export type Condition = keyof typeof DayIconsMap;

type ConditionIconProps = {
  condition: Condition;
  time?: Date;
  sunrise?: Date;
  sunset?: Date;
} & Icon;

const ICON_SIZE = 17;

const ICON_DEFAULT_PROPS = {
  width: ICON_SIZE,
  height: ICON_SIZE,
  lightColor: "white",
  darkColor: "black",
};

const DayIconsMap = {
  Clouds: Cloud,
  Fog: Cloud,
  Rain: Rain,
  Snow: Snow,
  Clear: Sun,
  Storm: Storm,
  Wind: Wind,
};

const NightIconsMap = {
  Clouds: Moon,
  Fog: Cloud,
  Rain: Rain,
  Snow: Snow,
  Clear: Moon,
  Storm: Storm,
  Wind: Wind,
};

const ConditionProps = {
  Clouds: {
    lightStroke: Colors.palette.grey,
    darkStroke: Colors.palette.grey,
  },
  Fog: {
    lightStroke: Colors.palette.grey,
    darkStroke: Colors.palette.grey,
  },
  Rain: {
    lightStroke: Colors.palette.lightBlue,
    darkStroke: Colors.palette.lightBlue,
  },
  Snow: {
    lightStroke: Colors.palette.grey,
    darkStroke: Colors.palette.grey,
  },
  Clear: {
    lightStroke: Colors.palette.yellow,
    darkStroke: Colors.palette.yellow,
  },
  Storm: {
    lightStroke: Colors.palette.yellow,
    darkStroke: Colors.palette.yellow,
  },
  Wind: {
    lightStroke: Colors.palette.deepBlue,
    darkStroke: Colors.palette.deepBlue,
  },
};

const ConditionIcon = ({
  condition,
  sunrise,
  sunset,
  time,
  ...props
}: ConditionIconProps) => {
  const Icon =
    time && sunrise && sunset && time > sunrise && time < sunset
      ? DayIconsMap[condition]
      : NightIconsMap[condition];

  return (
    <Icon {...ICON_DEFAULT_PROPS} {...ConditionProps[condition]} {...props} />
  );
};

export default ConditionIcon;

const styles = StyleSheet.create({});
