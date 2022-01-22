import { useState } from "react";
import { StyleSheet } from "react-native";
import SquareButton from "../../components/buttons/SquareButton";
import LocationPin from "../../components/icons/LocationPin";
import * as Location from "expo-location";
import Search from "../../components/icons/Search";
import { View } from "../../components/view/View";
import { Text } from "../../components/text/Text";
import { TextInput } from "../../components/input/TextInput";
import Colors from "../../constants/Colors";

type SearchSection = {
  onSearch: (result: any) => void;
  errorMsg: unknown;
};

const SearchSection = ({ onSearch, errorMsg }: SearchSection) => {
  const [coordinates, setCoordinates] = useState<Location.LocationObject>();
  const [location, setLocation] = useState<string>();
  const [locationDenied, setLocationDenied] = useState<boolean>(false);

  const getWeatherDetails = () => {
    onSearch(location ? { location } : { coordinates: coordinates?.coords });
  };

  const requestUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setLocationDenied(true);
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
          icon={
            location || coordinates ? (
              <Search
                lightColor={Colors.palette.white}
                lightStroke={Colors.palette.white}
                darkColor={Colors.palette.black}
                darkStroke={Colors.palette.black}
              />
            ) : (
              <LocationPin
                lightColor={Colors.palette.white}
                lightStroke={Colors.palette.white}
                darkColor={Colors.palette.black}
                darkStroke={Colors.palette.black}
              />
            )
          }
        />
      </View>
      <Text style={styles.errorText}>
        {errorMsg
          ? "Ups! We couldn't find the weather at this location. Try with another!"
          : locationDenied
          ? "Please enable location services to use this feature."
          : null}
      </Text>
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
