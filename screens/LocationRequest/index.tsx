import AppTitle from "./AppTitle";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import SearchSection from "./SearchSection";

export default function LocationRequestScreen({
  navigation,
}: RootStackScreenProps<"LocationRequest">) {
  return (
    <View style={styles.container}>
      <View style={styles.locationInput}>
        <AppTitle />
        <SearchSection />
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
