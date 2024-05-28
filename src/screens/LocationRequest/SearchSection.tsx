import SquareButton from "@/components/buttons/SquareButton";
import LocationPin from "@/components/icons/LocationPin";
import Search from "@/components/icons/Search";
import { TextInput } from "@/components/input/TextInput";
import { Text } from "@/components/text/Text";
import Colors from "@/constants/Colors";
import { useUserCoordinates } from "@/hooks/useUserCoordinates";
import i18n from "@/i18n";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const SEARCH_BUTTON_ICON_SIZE = 32;

type SearchSection = {
  onSearch: (result: any) => void;
  onLocationDeny: () => void;
};

const SearchSection = ({ onSearch, onLocationDeny }: SearchSection) => {
  const [location, setLocation] = useState<string>("");
  const {
    requestCoordinates,
    reset: resetCoordinates,
    loading: isLoadingCoordinates,
    coordinates: exactCoordinates,
  } = useUserCoordinates({
    onCoordinatesDeny: onLocationDeny,
  });

  const getWeatherDetails = () => {
    onSearch(
      location ? { location } : { coordinates: exactCoordinates?.coords }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>{i18n.t("nameCity")}</Text>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.locationInput}
          value={
            exactCoordinates
              ? `${exactCoordinates.coords.latitude}, ${exactCoordinates.coords.longitude}`
              : location
          }
          onChangeText={(value: string) => {
            if (exactCoordinates) {
              resetCoordinates();
            }
            setLocation(value);
          }}
          onSubmitEditing={getWeatherDetails}
          placeholder={i18n.t("sampleCityInput")}
          clearButtonMode="while-editing"
        />
        <SquareButton
          onClick={
            location || exactCoordinates
              ? getWeatherDetails
              : requestCoordinates
          }
          loading={isLoadingCoordinates}
        >
          {location || exactCoordinates ? (
            <Search
              size={SEARCH_BUTTON_ICON_SIZE}
              lightColor={Colors.palette.white}
              darkColor={Colors.palette.black}
            />
          ) : (
            <LocationPin
              size={SEARCH_BUTTON_ICON_SIZE}
              lightColor={Colors.palette.white}
              darkColor={Colors.palette.black}
            />
          )}
        </SquareButton>
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
