import { LocationPinIcon, Text } from "@/components";
import i18n from "@/i18n";
import { countries } from "country-data";
import { getCountry } from "country-list-spanish";
import React from "react";
import { View as DefaultView, StyleSheet } from "react-native";

interface CityTitleProps {
  city: string;
  countryCode: string;
}

const CityTitle: React.FC<CityTitleProps> = ({ city, countryCode }) => {
  let regionName = "-";
  if (countryCode) {
    regionName = i18n.locale.includes("es")
      ? getCountry(countryCode)
      : countries[countryCode].name;
  }

  return (
    <DefaultView>
      <Text style={styles.cityText} numberOfLines={1}>
        {city}
      </Text>
      <DefaultView style={styles.countryContainer}>
        <LocationPinIcon style={styles.locationPin} size={32} />
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
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    width: 200,
  },
  locationPin: {
    marginHorizontal: 5,
  },
  countryText: {
    fontSize: 16,
  },
});
