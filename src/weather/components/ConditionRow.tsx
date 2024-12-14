import { Text } from "@/components";
import ICON_DEFAULT_PROPS from "@/constants/Icon";
import i18n from "@/i18n";
import { Icon } from "@/interfaces";
import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Weather } from "../interfaces";
import ConditionIcon from "./ConditionIcon";

type ConditionRow = {
  text?: string;
  condition?: Weather["condition"];
  icon?: (p: Icon) => JSX.Element;
} & Weather["time"];

const ConditionRow = ({
  icon,
  text,
  condition,
  now,
  sunrise,
  sunset,
}: ConditionRow) => {
  if (!condition && !text) {
    return null;
  }

  const computedText =
    condition === "Wind" ? text : i18n.t(`conditions.${condition}`);

  return (
    <DefaultView style={styles.container}>
      {condition ? (
        <ConditionIcon
          condition={condition}
          now={now}
          sunset={sunset}
          sunrise={sunrise}
        />
      ) : icon ? (
        icon(ICON_DEFAULT_PROPS)
      ) : null}
      <Text style={styles.conditionText}>{computedText}</Text>
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 22,
    marginTop: 17,
    width: "100%",
  },
  conditionText: {
    marginLeft: 5,
  },
});

export default ConditionRow;