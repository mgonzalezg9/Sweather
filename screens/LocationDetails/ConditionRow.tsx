import React from "react";
import { StyleSheet, Text, View as DefaultView } from "react-native";
import { Icon } from "../../components/icons";
import Cloud from "../../components/icons/cloud";
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

// TODO: Move and fill in the missing icons
const ConditionMap = {
  Clouds: (
    <Cloud
      lightStroke={Colors.palette.grey}
      darkStroke={Colors.palette.grey}
      {...ICON_DEFAULT_PROPS}
    />
  ),
  Sunny: <Sun {...ICON_DEFAULT_PROPS} />,
  Wind: (
    <Wind
      lightStroke={Colors.palette.deepBlue}
      darkStroke={Colors.palette.deepBlue}
      {...ICON_DEFAULT_PROPS}
    />
  ),
};

export type Condition = keyof typeof ConditionMap;

type ConditionRow = {
  text?: string;
  condition?: Condition;
  icon?: (p: Icon) => JSX.Element;
};

const ConditionRow = ({ icon, text, condition }: ConditionRow) => {
  if (!condition && !text) {
    return null;
  }

  const ComputedIcon = icon || ConditionMap[condition as Condition];
  const computedText = condition === "Wind" ? text : condition;

  return (
    <DefaultView style={styles.container}>
      {ComputedIcon}
      <Text style={styles.conditionText}>{computedText}</Text>
    </DefaultView>
  );
};

export default ConditionRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 22,
    marginTop: 17,
    width: "100%",
  },
  conditionText: {
    marginLeft: 5,
  },
});
