import { useState } from "react";
import { StyleSheet } from "react-native";
import SquareButton from "../../components/buttons/SquareButton";
import LocationPin from "../../components/icons/LocationPin";
import * as Location from "expo-location";
import Search from "../../components/icons/Search";
import { View } from "../../components/view/View";
import { Text } from "../../components/text/Text";
import { TextInput } from "../../components/input/TextInput";

type SearchSection = {
  onSearch: (result: any) => void;
};

const SearchSection = ({ onSearch }: SearchSection) => {
  const [coordinates, setCoordinates] = useState<Location.LocationObject>();
  const [location, setLocation] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const getWeatherDetails = () => {
    onSearch(location ? { location } : { coordinates: coordinates?.coords });
  };

  const requestUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setCoordinates(location);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>Name your town or city:</Text>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.locationInput}
          value={
            coordinates
              ? `${coordinates.coords.latitude}, ${coordinates.coords.longitude}`
              : location
          }
          onChangeText={(value: string) => {
            if (coordinates) {
              setCoordinates(undefined);
            }
            setLocation(value);
          }}
          onSubmitEditing={getWeatherDetails}
          placeholder="Eg. Tokyo"
          clearButtonMode="while-editing"
        />
        <SquareButton
          onClick={
            location || coordinates ? getWeatherDetails : requestUserLocation
          }
          icon={location || coordinates ? <Search /> : <LocationPin />}
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
