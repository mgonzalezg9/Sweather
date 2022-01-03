import { StyleSheet, Image } from "react-native";
import { View, Text } from "../../components/Themed";

const SearchSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>Specify your location:</Text>
      <View style={styles.searchBox}>
        <Text>S</Text>
        <Text>Icon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    marginLeft: 20,
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
  },
  chooseText: {
    fontSize: 18,
  },
});

export default SearchSection;
