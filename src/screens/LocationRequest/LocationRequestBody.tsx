import Colors from "@/constants/Colors";
import { SweatherErrorCode } from "@/error/error-logic";
import useWallpaper from "@/wallpaper/hooks/useWallpaper";
import useWeatherForecast from "@/weather/hooks/useWeatherForecast";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import ErrorSection from "./ErrorSection";
import SearchSection from "./SearchSection";

const LocationRequestBody: React.FC = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({} as never);
  const [locationDenied, setLocationDenied] = useState(false);

  const {
    weather,
    forecast,
    loading: loadingWeather,
    error: errorWeather,
  } = useWeatherForecast(location);
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
  }, [location]);

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
            onSearch={setLocation}
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
