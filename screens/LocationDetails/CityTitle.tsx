import React from "react";
import { StyleSheet, View as DefaultView } from "react-native";
import { View } from "../../components/view/View";
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
    <View {...props}>
      <Text style={styles.cityText}>{city}</Text>
      <View style={styles.countryContainer}>
        <LocationPin style={styles.locationPin} width={20} />
        <Text style={styles.countryText}>{country}</Text>
      </View>
    </View>
  );
};

export default CityTitle;

const styles = StyleSheet.create({
  cityText: {
    fontSize: 36,
  },
  countryText: {
    fontSize: 16,
  },
  countryContainer: {
    flexDirection: "row",
    marginTop: 5,
    width: 80,
  },
  locationPin: {
    marginHorizontal: 5,
  },
});
