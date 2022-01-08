import AppTitle from "./AppTitle";
import { StyleSheet } from "react-native";

import { RootStackScreenProps } from "../../types";
import SearchSection from "./SearchSection";
import { Text } from "../../components/text/Text";
import { View } from "../../components/view/View";

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
      <View>
        <Text style={styles.poweredText}>Powered by: XXXXXXXXXXX</Text>
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
});
