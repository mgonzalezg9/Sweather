import Colors from "@/constants/Colors";
import { ICON_DEFAULT_PROPS } from "@/constants/Icon";
import { Icon } from "@/interfaces";
import React from "react";
import { Condition, Weather } from "../interfaces";
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
  lightColor: string;
  darkColor: string;
};

const DayProps: Record<Condition, ThemeSetup> = {
  Clouds: {
    lightColor: Colors.palette.grey,
    darkColor: Colors.palette.grey,
  },
  Smoke: {
    lightColor: Colors.palette.black,
    darkColor: Colors.palette.black,
  },
  Fog: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
  },
  Haze: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
  },
  Mist: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
  },
  Rain: {
    lightColor: Colors.palette.lightBlue,
    darkColor: Colors.palette.blue,
  },
  Squall: {
    lightColor: Colors.palette.lightBlue,
    darkColor: Colors.palette.blue,
  },
  Drizzle: {
    lightColor: Colors.palette.lightBlue,
    darkColor: Colors.palette.blue,
  },
  Snow: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.white,
  },
  Clear: {
    lightColor: Colors.palette.yellow,
    darkColor: Colors.palette.yellow,
  },
  Thunderstorm: {
    lightColor: Colors.palette.yellow,
    darkColor: Colors.palette.yellow,
  },
  Wind: {
    lightColor: Colors.palette.deepBlue,
    darkColor: Colors.palette.deepBlue,
  },
  Dust: {
    lightColor: Colors.palette.brown,
    darkColor: Colors.palette.brown,
  },
  Sand: {
    lightColor: Colors.palette.brown,
    darkColor: Colors.palette.brown,
  },
  Ash: {
    lightColor: Colors.palette.black,
    darkColor: Colors.palette.black,
  },
  Tornado: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
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
    lightColor: Colors.palette.grey,
    darkColor: Colors.palette.grey,
  },
  Smoke: {
    lightColor: Colors.palette.grey,
    darkColor: Colors.palette.grey,
  },
  Fog: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
  },
  Haze: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
  },
  Mist: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
  },
  Rain: {
    lightColor: Colors.palette.blue,
    darkColor: Colors.palette.blue,
  },
  Squall: {
    lightColor: Colors.palette.lightBlue,
    darkColor: Colors.palette.blue,
  },
  Drizzle: {
    lightColor: Colors.palette.lightBlue,
    darkColor: Colors.palette.blue,
  },
  Snow: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.white,
  },
  Clear: {
    lightColor: Colors.palette.purple,
    darkColor: Colors.palette.purple,
  },
  Thunderstorm: {
    lightColor: Colors.palette.yellow,
    darkColor: Colors.palette.yellow,
  },
  Wind: {
    lightColor: Colors.palette.deepBlue,
    darkColor: Colors.palette.blue,
  },
  Dust: {
    lightColor: Colors.palette.brown,
    darkColor: Colors.palette.brown,
  },
  Sand: {
    lightColor: Colors.palette.brown,
    darkColor: Colors.palette.brown,
  },
  Ash: {
    lightColor: Colors.palette.grey,
    darkColor: Colors.palette.grey,
  },
  Tornado: {
    lightColor: Colors.palette.lightGrey,
    darkColor: Colors.palette.lightGrey,
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
  const dayTimeProps = isDay ? DayProps[condition] : NightProps[condition];

  return <Icon {...ICON_DEFAULT_PROPS} {...dayTimeProps} {...props} />;
};

export default ConditionIcon;
