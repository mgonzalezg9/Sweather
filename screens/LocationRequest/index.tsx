import AppTitle from "./AppTitle";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View as DefaultView,
} from "react-native";

import { RootStackScreenProps } from "../../types";
import SearchSection from "./SearchSection";
import { Text } from "../../components/text/Text";
import { View } from "../../components/view/View";
import OpenweatherBanner from "../../assets/images/openweather.png";
import { getCurrentWeather, getHourlyForecast } from "../../services/weather";
import { useState } from "react";
import Colors from "../../constants/Colors";
import { getLocationBackground } from "../../services/wallpaper";
import I18n from "i18n-js";

export default function LocationRequestScreen({
  navigation,
}: RootStackScreenProps<"LocationRequest">) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const weatherSearch = async (location: any) => {
    let weather, forecast;
    setError(false);

    try {
      console.log("Requesting weather at location", location);
      setLoading(true);

      [weather, forecast] = await Promise.all([
        getCurrentWeather(location),
        getHourlyForecast(location),
      ]);
    } catch (error) {
      console.error("Unable to retrieve weather at location");
      setError(error);
    } finally {
      setLoading(false);
    }

    if (weather && forecast) {
      try {
        console.log("Searching wallpaper");
        setLoading(true);

        const wallpaper = await getLocationBackground({
          query: weather.geolocation.city,
        });
        setLoading(false);

        navigation.navigate("LocationDetails", { weather, forecast, wallpaper });
      } catch (error) {
        console.error("Unable to retrieve wallpaper from location");
        // ? This should not be seen as a fatal error
        // Weather can be displayed without background
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <DefaultView style={styles.locationInput}>
        <AppTitle />
        {loading && !error ? (
          <ActivityIndicator
            style={styles.spinner}
            size="large"
            color={Colors.light.tint}
          />
        ) : (
          <SearchSection onSearch={weatherSearch} errorMsg={error} />
        )}
      </DefaultView>
      <DefaultView style={styles.poweredContainer}>
        <Text style={styles.poweredText}>{I18n.t("poweredBy")}:</Text>
        <Image source={OpenweatherBanner} style={styles.openweatherImage} />
      </DefaultView>
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
  poweredText: {
    fontSize: 18,
  },
  locationInput: {
    width: "100%",
    marginLeft: 40,
    marginRight: 40,
  },
  poweredContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  openweatherImage: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    marginLeft: 15,
  },
  spinner: {
    marginTop: 20,
  },
});
