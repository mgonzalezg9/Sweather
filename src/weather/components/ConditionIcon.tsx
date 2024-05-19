import Colors from "@/constants/Colors";
import { ICON_DEFAULT_PROPS } from "@/constants/Icon";
import { Icon } from "@/interfaces";
import { Condition, Weather } from "@/weather/interfaces";
import React from "react";
import Cloud from "./icons/Cloud";
import Fog from "./icons/Fog";
import Moon from "./icons/Moon";
import Rain from "./icons/Rain";
import Snow from "./icons/Snow";
import Storm from "./icons/Storm";
import Sun from "./icons/Sun";
import Tornado from "./icons/Tornado";
import Wind from "./icons/Wind";

type ConditionIconProps = {
  condition: Weather["condition"];
} & Partial<Weather["time"]> &
  Icon;

const DayIconsMap: Record<Condition, React.FC<Icon>> = {
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

type ThemeSetup = {
  lightStroke: string;
  darkStroke: string;
};

const DayProps: Record<Condition, ThemeSetup> = {
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

const NightIconsMap: Record<Condition, React.FC<Icon>> = {
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
} as const;

const NightProps: Record<Condition, ThemeSetup> = {
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
} as const;

const ConditionIcon = ({
  condition,
  now,
  sunrise,
  sunset,
  ...props
}: ConditionIconProps) => {
  const isDay = now && sunrise && sunset && now < sunset;
  const Icon = isDay ? DayIconsMap[condition] : NightIconsMap[condition];
  const Props = isDay ? DayProps[condition] : NightProps[condition];

  return <Icon {...ICON_DEFAULT_PROPS} {...Props} {...props} />;
};

export default ConditionIcon;
