import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { Icon } from "../../components/icons";
import { Text } from "../../components/text/Text";
import ConditionIcon, {
  Condition,
} from "../../components/weather/ConditionIcon";

type ConditionRow = {
  text?: string;
  condition?: Condition;
  icon?: (p: Icon) => JSX.Element;
};

const ConditionRow = ({ icon, text, condition }: ConditionRow) => {
  if (!condition && !text) {
    return null;
  }
  const computedText = condition === "Wind" ? text : condition;

  return (
    <DefaultView style={styles.container}>
      {condition ? <ConditionIcon condition={condition} /> : icon}
      <Text style={styles.conditionText}>{computedText}</Text>
    </DefaultView>
  );
};

export default ConditionRow;

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
