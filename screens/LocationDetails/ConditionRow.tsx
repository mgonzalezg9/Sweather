import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { Icon } from "../../components/icons";
import { Text } from "../../components/text/Text";
import { Condition } from "../../services/weather/types";
import { ConditionMap } from "../../services/weather/map";

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
