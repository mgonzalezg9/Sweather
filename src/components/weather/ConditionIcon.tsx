import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Icon } from "../icons";
import Cloud from "../icons/Cloud";
import Fog from "../icons/Fog";
import Moon from "../icons/Moon";
import Rain from "../icons/Rain";
import Snow from "../icons/Snow";
import Storm from "../icons/Storm";
import Sun from "../icons/Sun";
import Tornado from "../icons/Tornado";
import Wind from "../icons/Wind";

export type Condition = keyof typeof DayIconsMap;

type ConditionIconProps = {
  condition: Condition;
  time?: string;
  sunrise?: string;
  sunset?: string;
} & Icon;

const ICON_SIZE = 17;

const ICON_DEFAULT_PROPS = {
  width: ICON_SIZE,
  height: ICON_SIZE,
  lightColor: Colors.palette.white,
  darkColor: Colors.palette.black,
};

const DayIconsMap = {
  Clouds: Cloud,
  Smoke: Cloud,
  Fog: Fog,
  Haze: Fog,
  Mist: Fog,
  Rain: Rain,
  Squall: Rain,
  Drizzle: Rain,
  Snow: Snow,
  Clear: Sun,
  Thunderstorm: Storm,
  Wind: Wind,
  Dust: Wind,
  Sand: Wind,
  Ash: Wind,
  Tornado: Tornado,
};

const DayProps = {
  Clouds: {
    lightStroke: Colors.palette.grey,
    darkStroke: Colors.palette.grey,
  },
  Smoke: {
    lightStroke: Colors.palette.black,
    darkStroke: Colors.palette.black,
  },
  Fog: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
  Haze: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
  Mist: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
  Rain: {
    lightStroke: Colors.palette.lightBlue,
    darkStroke: Colors.palette.blue,
  },
  Squall: {
    lightStroke: Colors.palette.lightBlue,
    darkStroke: Colors.palette.blue,
  },
  Drizzle: {
    lightStroke: Colors.palette.lightBlue,
    darkStroke: Colors.palette.blue,
  },
  Snow: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.white,
  },
  Clear: {
    lightStroke: Colors.palette.yellow,
    darkStroke: Colors.palette.yellow,
  },
  Thunderstorm: {
    lightStroke: Colors.palette.yellow,
    darkStroke: Colors.palette.yellow,
  },
  Wind: {
    lightStroke: Colors.palette.deepBlue,
    darkStroke: Colors.palette.deepBlue,
  },
  Dust: {
    lightStroke: Colors.palette.brown,
    darkStroke: Colors.palette.brown,
  },
  Sand: {
    lightStroke: Colors.palette.brown,
    darkStroke: Colors.palette.brown,
  },
  Ash: {
    lightStroke: Colors.palette.black,
    darkStroke: Colors.palette.black,
  },
  Tornado: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
};

const NightIconsMap = {
  Clouds: Cloud,
  Smoke: Cloud,
  Fog: Fog,
  Haze: Fog,
  Mist: Fog,
  Rain: Rain,
  Squall: Rain,
  Drizzle: Rain,
  Snow: Snow,
  Clear: Moon,
  Thunderstorm: Storm,
  Wind: Wind,
  Dust: Wind,
  Sand: Wind,
  Ash: Wind,
  Tornado: Tornado,
};

const NightProps = {
  Clouds: {
    lightStroke: Colors.palette.grey,
    darkStroke: Colors.palette.grey,
  },
  Smoke: {
    lightStroke: Colors.palette.grey,
    darkStroke: Colors.palette.grey,
  },
  Fog: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
  Haze: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
  Mist: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
  Rain: {
    lightStroke: Colors.palette.blue,
    darkStroke: Colors.palette.blue,
  },
  Squall: {
    lightStroke: Colors.palette.lightBlue,
    darkStroke: Colors.palette.blue,
  },
  Drizzle: {
    lightStroke: Colors.palette.lightBlue,
    darkStroke: Colors.palette.blue,
  },
  Snow: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.white,
  },
  Clear: {
    lightStroke: Colors.palette.purple,
    darkStroke: Colors.palette.purple,
  },
  Thunderstorm: {
    lightStroke: Colors.palette.yellow,
    darkStroke: Colors.palette.yellow,
  },
  Wind: {
    lightStroke: Colors.palette.deepBlue,
    darkStroke: Colors.palette.blue,
  },
  Dust: {
    lightStroke: Colors.palette.brown,
    darkStroke: Colors.palette.brown,
  },
  Sand: {
    lightStroke: Colors.palette.brown,
    darkStroke: Colors.palette.brown,
  },
  Ash: {
    lightStroke: Colors.palette.grey,
    darkStroke: Colors.palette.grey,
  },
  Tornado: {
    lightStroke: Colors.palette.lightGrey,
    darkStroke: Colors.palette.lightGrey,
  },
};

const ConditionIcon = ({
  condition,
  sunrise,
  sunset,
  time,
  ...props
}: ConditionIconProps) => {
  const isDay = time && sunrise && sunset && time < sunset;
  const Icon = isDay ? DayIconsMap[condition] : NightIconsMap[condition];
  const Props = isDay ? DayProps[condition] : NightProps[condition];

  return <Icon {...ICON_DEFAULT_PROPS} {...Props} {...props} />;
};

export default ConditionIcon;

const styles = StyleSheet.create({});
