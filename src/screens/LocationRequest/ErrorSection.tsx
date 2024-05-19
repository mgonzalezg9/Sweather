import { Text } from "@/components/text/Text";
import {
  SWEATHER_ERROR_MESSAGE_MAP,
  SweatherErrorCode,
} from "@/error/error-logic";
import i18n from "@/i18n";
import React from "react";
import { StyleSheet } from "react-native";

type ErrorSectionProps = {
  error: SweatherErrorCode;
};

const ErrorSection: React.FC<ErrorSectionProps> = ({ error }) => {
  const textKey = SWEATHER_ERROR_MESSAGE_MAP[error];

  if (!textKey) {
    console.error(`Error ${error} does not have a text key defined`, {
      textKey,
    });
  }

  return <Text style={styles.errorText}>{textKey && i18n.t(textKey)}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    color: "red",
  },
});

export default ErrorSection;
