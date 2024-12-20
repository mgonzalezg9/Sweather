import Colors from "@/constants/Colors";
import { SweatherErrorCode } from "@/error/error-logic";
import { useDeviceLocales } from "@/hooks";
import useWallpaper from "@/wallpaper/hooks/useWallpaper";
import {
  UseWeatherAndForecastProps,
  useWeatherForecast,
} from "@/weather/hooks";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import ErrorSection from "./ErrorSection";
import SearchSection from "./SearchSection";

const LocationRequestBody = () => {
  const navigation = useNavigation();
  const [geoData, setGeoData] = useState<Omit<UseWeatherAndForecastProps, "device">>(
    {} as never
  );
  const [locationDenied, setLocationDenied] = useState(false);

  const { locale } = useDeviceLocales();
  const {
    weather,
    forecast,
    loading: loadingWeather,
    error: errorWeather,
  } = useWeatherForecast({
    ...geoData,
    device: {
      locale,
    },
  });
  const { wallpaper, loading: loadingWallpaper } = useWallpaper(
    weather?.geolocation?.city
  );

  useEffect(() => {
    if (weather && forecast && wallpaper) {
      navigation.navigate("LocationDetails", {
        weather,
        forecast,
        wallpaper,
      });
    }
  }, [weather, forecast, wallpaper, navigation]);

  useEffect(() => {
    if (locationDenied) {
      setLocationDenied(false);
    }
  }, [geoData]);

  return (
    <View style={styles.searchContainer}>
      {loadingWeather || loadingWallpaper ? (
        <ActivityIndicator
          style={styles.spinner}
          color={Colors.light.tint}
          size="large"
        />
      ) : (
        <>
          <SearchSection
            onSearch={setGeoData}
            onLocationDeny={() => setLocationDenied(true)}
          />
          {errorWeather || locationDenied ? (
            <ErrorSection
              error={errorWeather || SweatherErrorCode.USER_LOCATION_DENIED}
            />
          ) : null}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 20,
  },
  searchContainer: {
    gap: 20,
  },
});

export default LocationRequestBody;
