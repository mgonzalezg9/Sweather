import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";

export default function LocationDetailsScreen({
  route,
}: RootStackScreenProps<"LocationDetails">) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Hello world!
          {JSON.stringify(route.params)}
        </Text>
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
  text: {
    fontSize: 18,
  },
});
