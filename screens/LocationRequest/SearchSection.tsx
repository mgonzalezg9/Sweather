import { StyleSheet, Image } from "react-native";
import SquareButton from "../../components/buttons/SquareButton";
import LocationPin from "../../components/icons/LocationPin";
import { View, Text } from "../../components/Themed";

const SearchSection = () => {
  const searchLocation = () => {
    console.log("Searching for location");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>Specify your location:</Text>
      <View style={styles.searchBox}>
        <Text>S</Text>
        <SquareButton onClick={searchLocation} icon={<LocationPin />} />
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
