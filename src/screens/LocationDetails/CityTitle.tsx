import LocationPin from "@/components/icons/LocationPin";
import { Text } from "@/components/text/Text";
import { locale } from "@/i18n/localization";
import { countries } from "country-data";
import { getCountry } from "country-list-spanish";
import React from "react";
import { View as DefaultView, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface CityTitleProps {
  city: string;
  countryCode: string;
  style: StyleProp<ViewStyle>
};

const CityTitle: React.FC<CityTitleProps> = ({
  city,
  countryCode,
  style,
}) => {
  let regionName = "-";
  if (countryCode) {
    regionName = locale.includes("es")
      ? getCountry(countryCode)
      : countries[countryCode].name;
  }

  return (
    <DefaultView style={style}>
      <Text style={styles.cityText} numberOfLines={1}>
        {city}
      </Text>
      <DefaultView style={styles.countryContainer}>
        <LocationPin style={styles.locationPin} width={20} />
        <Text style={styles.countryText} numberOfLines={1}>
          {regionName}
        </Text>
      </DefaultView>
    </DefaultView>
  );
};

export default CityTitle;

const styles = StyleSheet.create({
  cityText: {
    fontSize: 36,
    maxWidth: 250,
  },
  countryText: {
    fontSize: 16,
  },
  countryContainer: {
    flexDirection: "row",
    marginTop: 5,
    width: 200,
  },
  locationPin: {
    marginHorizontal: 5,
  },
});
