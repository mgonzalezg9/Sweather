import { Text, View } from "@/components";
import { RootStackScreenProps } from "@/navigation/types.d";
import { Pressable, StyleSheet } from "react-native";

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <Pressable
        onPress={() => navigation.replace("LocationRequest")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
