import { countries } from "country-data";
import { getCountry } from "country-list-spanish";
import * as Localization from "expo-localization";
import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import LocationPin from "../../components/icons/LocationPin";
import { Text } from "../../components/text/Text";

type CityTitleProps = {
  city: string;
  countryCode: string;
};

const CityTitle = ({
  city,
  countryCode,
  ...props
}: Partial<CityTitleProps>) => {
  let regionName = "-";
  if (countryCode) {
    regionName = Localization.locale.includes("es")
      ? getCountry(countryCode)
      : countries[countryCode].name;
  }

  return (
    <DefaultView {...props}>
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
