import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";

export default function LocationRequestScreen({
  navigation,
}: RootStackScreenProps<"LocationRequest">) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hello world!</Text>
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
