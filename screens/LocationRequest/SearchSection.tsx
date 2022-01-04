import { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import SquareButton from "../../components/buttons/SquareButton";
import LocationPin from "../../components/icons/LocationPin";
import { View, Text, TextInput } from "../../components/Themed";
import * as Location from "expo-location";
import Search from "../../components/icons/Search";

type SearchSection = {
  onSearch: (result: any) => void;
};

const SearchSection = ({ onSearch }: SearchSection) => {
  const [coordinates, setCoordinates] = useState<Location.LocationObject>();
  const [location, setLocation] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const getWeatherDetails = () => {
    onSearch(location ? { location } : { coordinates });
  };

  const requestUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log("User's current location:", location);
    setCoordinates(location);
    setLocation(`${location.coords.latitude}, ${location.coords.longitude}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>Name your town or city:</Text>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.locationInput}
          value={location}
          onChangeText={setLocation}
          onSubmitEditing={getWeatherDetails}
          placeholder="Eg. Tokyo"
          clearButtonMode="while-editing"
        />
        <SquareButton
          onClick={location ? getWeatherDetails : requestUserLocation}
          icon={location ? <Search /> : <LocationPin />}
        />
      </View>
      {errorMsg ? (
        <Text style={styles.errorText}>
          Ups! We couldn't find the weather at this location. Try with another!
        </Text>
      ) : null}
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
  errorText: {
    fontSize: 18,
    marginTop: 40,
    color: "red",
  },
  locationInput: {
    marginRight: 15,
    flex: 1,
  },
});

export default SearchSection;
