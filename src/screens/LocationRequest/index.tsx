import {
  ActivityIndicator,
  View as DefaultView,
  Image,
  StyleSheet
} from "react-native";
import AppTitle from "./AppTitle";

import { useEffect, useState } from "react";
import OpenweatherBanner from "../../assets/images/openweather.png";
import { Text } from "../../components/text/Text";
import { View } from "../../components/view/View";
import Colors from "../../constants/Colors";
import useWallpaper from "../../hooks/wallpaper/useWallpaper";
import useWeatherForecast from "../../hooks/weather/useWeatherForecast";
import i18n from "../../i18n";
import { LocationQuery, RootStackScreenProps } from "../../types";
import SearchSection from "./SearchSection";

export default function LocationRequestScreen({
  navigation,
}: RootStackScreenProps<"LocationRequest">) {
  const [location, setLocation] = useState({} as LocationQuery)

  const { weather, forecast, loading: loadingWeather, error: errorWeather } = useWeatherForecast(location)
  const { wallpaper, loading: loadingWallpaper } = useWallpaper(weather?.geolocation?.city)

  useEffect(() => {
    if (weather && forecast && wallpaper) {
      navigation.navigate("LocationDetails", {
        weather,
        forecast,
        wallpaper
      });
    }
  }, [weather, forecast, wallpaper, navigation])

  return (
    <View style={styles.container}>
      <DefaultView style={styles.locationInput}>
        <AppTitle />
        {(loadingWeather || loadingWallpaper) ? (
          <ActivityIndicator
            style={styles.spinner}
            color={Colors.light.tint}
            size="large"
          />
        ) : (
          <SearchSection onSearch={setLocation} errorMsg={errorWeather} />
        )}
      </DefaultView>
      <DefaultView style={styles.poweredContainer}>
        <Text style={styles.poweredText}>{i18n.t("poweredBy")}:</Text>
        <Image source={OpenweatherBanner} style={styles.openweatherImage} resizeMode="contain" />
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
    height: 100,
    width: 100,
    marginLeft: 15,
  },
  spinner: {
    marginTop: 20,
  },
});
