import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { Text } from "../../components/text/Text";
import LocationPin from "../../components/icons/LocationPin";

type CityTitleProps = {
  city: string;
  country: string;
};

const CityTitle = ({
  city,
  country = "Spain",
  ...props
}: Partial<CityTitleProps>) => {
  return (
    <DefaultView {...props}>
      <Text style={styles.cityText} numberOfLines={1}>
        {city}
      </Text>
      <DefaultView style={styles.countryContainer}>
        <LocationPin style={styles.locationPin} width={20} />
        <Text style={styles.countryText} numberOfLines={1}>
          {country}
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
    // width: 80,
  },
  locationPin: {
    marginHorizontal: 5,
  },
});
