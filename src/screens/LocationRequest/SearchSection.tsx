import SquareButton from "@/components/buttons/SquareButton";
import LocationPin from "@/components/icons/LocationPin";
import Search from "@/components/icons/Search";
import { TextInput } from "@/components/input/TextInput";
import { Text } from "@/components/text/Text";
import Colors from "@/constants/Colors";
import i18n from "@/i18n";
import * as Location from "expo-location";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const SEARCH_BUTTON_SIZE = 32;

type SearchSection = {
  onSearch: (result: any) => void;
  onLocationDeny: () => void;
};

const SearchSection = ({ onSearch, onLocationDeny }: SearchSection) => {
  const [coordinates, setCoordinates] = useState<Location.LocationObject>();
  const [location, setLocation] = useState<string>("");
  const [requestLocation, setRequestLocation] = useState(false);

  const getWeatherDetails = () => {
    onSearch(location ? { location } : { coordinates: coordinates?.coords });
  };

  const requestUserLocation = async () => {
    setRequestLocation(true);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      onLocationDeny();
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setCoordinates(location);

    setRequestLocation(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>{i18n.t("nameCity")}</Text>
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
          placeholder={i18n.t("sampleCityInput")}
          clearButtonMode="while-editing"
        />
        <SquareButton
          onClick={
            location || coordinates ? getWeatherDetails : requestUserLocation
          }
          icon={
            location || coordinates ? (
              <Search
                size={SEARCH_BUTTON_SIZE}
                lightColor={Colors.palette.white}
                darkColor={Colors.palette.black}
              />
            ) : requestLocation ? (
              <ActivityIndicator color={Colors.palette.black} />
            ) : (
              <LocationPin
                size={SEARCH_BUTTON_SIZE}
                lightColor={Colors.palette.white}
                darkColor={Colors.palette.black}
              />
            )
          }
        />
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
