import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";
import { Icon } from "../../components/icons";
import { Text } from "../../components/text/Text";
import ConditionIcon from "../../components/weather/ConditionIcon";
import { ICON_DEFAULT_PROPS } from "../../constants/Icon";
import i18n from "../../i18n";
import { Weather } from "../../services/weather/types";

type ConditionRow = {
  text?: string;
  condition?: Weather['condition'];
  icon?: (p: Icon) => JSX.Element;
} & Partial<Weather['time']>;

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
