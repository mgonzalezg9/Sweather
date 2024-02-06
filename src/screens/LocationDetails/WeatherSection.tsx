import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/view/View";
import ForecastRow from "../../components/weather/ForecastRow";
import { Forecast, Weather } from "../../services/weather/types";
import CityTitle from "./CityTitle";
import WeatherDetails from "./WeatherDetails";

type WeatherSectionProps = {
  weather: Weather;
  forecast: Forecast;
};

const WeatherSection = ({
  weather,
  forecast,
}: Partial<WeatherSectionProps>) => {
  return (
    <View style={styles.container}>
      <CityTitle
        style={styles.title}
        city={weather?.geolocation.city}
        countryCode={weather?.geolocation.countryCode}
      />
      <WeatherDetails
        temperature={weather?.temperature.current}
        condition={weather?.condition}
        windSpeed={weather?.wind}
        time={weather?.time}
      />
      <ForecastRow
        hours={forecast?.hours}
        sunrise={forecast?.sunrise}
        sunset={forecast?.sunset}
      />
    </View>
  );
};

export default WeatherSection;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "35%",
    width: "100%",
    height: "67%",
    borderTopRightRadius: 500,
  },
  title: {
    position: "absolute",
    top: 75,
    left: 5,
  },
});
