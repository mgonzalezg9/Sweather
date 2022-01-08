import AppTitle from "./AppTitle";
import { Image, StyleSheet } from "react-native";

import { RootStackScreenProps } from "../../types";
import SearchSection from "./SearchSection";
import { Text } from "../../components/text/Text";
import { View } from "../../components/view/View";
import OpenweatherBanner from "../../assets/images/openweather.png";

export default function LocationRequestScreen({
  navigation,
}: RootStackScreenProps<"LocationRequest">) {
  const weatherSearch = (location: any) => {
    navigation.navigate("LocationDetails", location);
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationInput}>
        <AppTitle />
        <SearchSection onSearch={weatherSearch} />
      </View>
      <View style={styles.poweredContainer}>
        <Text style={styles.poweredText}>Powered by:</Text>
        <Image source={OpenweatherBanner} style={styles.openweatherImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  poweredText: {
    fontSize: 18,
  },
  locationInput: {
    width: "100%",
    marginLeft: 40,
    marginRight: 40,
  },
  poweredContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  openweatherImage: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    marginLeft: 15,
  },
});
