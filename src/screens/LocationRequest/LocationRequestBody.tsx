import {
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

import Colors from "@/constants/Colors";
import useWallpaper from "@/hooks/wallpaper/useWallpaper";
import useWeatherForecast from "@/hooks/weather/useWeatherForecast";
import { useEffect, useState } from "react";
import SearchSection from "./SearchSection";

import { SweatherErrorCode } from "@/logic/error";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import ErrorSection from "./ErrorSection";

const LocationRequestBody: React.FC = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({} as never);
  const [locationDenied, setLocationDenied] = useState(false);

  const { weather, forecast, loading: loadingWeather, error: errorWeather } = useWeatherForecast(location);
  const { wallpaper, loading: loadingWallpaper } = useWallpaper(weather?.geolocation?.city);

  useEffect(() => {
    if (weather && forecast && wallpaper) {
      navigation.navigate("LocationDetails", {
        weather,
        forecast,
        wallpaper
      });
    }
  }, [weather, forecast, wallpaper, navigation])

  useEffect(() => {
    if (locationDenied) {
      setLocationDenied(false);
    }
  }, [location])

  return (
    <View style={styles.searchContainer}>
      {(loadingWeather || loadingWallpaper) ? (
        <ActivityIndicator
          style={styles.spinner}
          color={Colors.light.tint}
          size="large"
        />
      ) : (
        <>
          <SearchSection onSearch={setLocation} onLocationDeny={() => setLocationDenied(true)} />
          {
            errorWeather || locationDenied ?
              <ErrorSection error={errorWeather || SweatherErrorCode.USER_LOCATION_DENIED} />
              : null
          }
        </>
      )}
    </View>
  )
};


const styles = StyleSheet.create({
  spinner: {
    paddingTop: 20,
  },
  searchContainer: {
    gap: 20,
  }
});

export default LocationRequestBody;
