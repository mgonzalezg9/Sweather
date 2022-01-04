import { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import SquareButton from "../../components/buttons/SquareButton";
import LocationPin from "../../components/icons/LocationPin";
import { View, Text, TextInput } from "../../components/Themed";

const SearchSection = () => {
  const [location, setLocation] = useState<string>();

  const searchLocation = () => {
    console.log("Searching for location");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>Name your town or city:</Text>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Eg. Tokyo"
          onChangeText={setLocation}
          style={styles.locationInput}
        />
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
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
  },
  chooseText: {
    fontSize: 18,
    marginBottom: 10,
  },
  locationInput: {
    marginRight: 15,
    flex: 1,
  },
});

export default SearchSection;
