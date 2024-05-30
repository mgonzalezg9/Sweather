import { ForecastResponse, WeatherResponse } from "@/weather/interfaces";
import { parseForecastResponse, parseWeatherResponse } from "../parser";

describe("WeatherResponseParser", () => {
  it("should correctly parse the weather response", () => {
    const response: WeatherResponse = {
      main: {
        temp: 293.15,
        feels_like: 291.86,
        temp_min: 289.82,
        temp_max: 295.37,
        humidity: 56,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
      },
      weather: [
        {
          id: 1,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      wind: {
        speed: 3.6,
        deg: 0,
        gust: 0,
      },
      sys: {
        country: "US",
        sunrise: 1600410600,
        sunset: 1600454400,
        id: 5128581,
        type: 1,
      },
      name: "New York",
      dt: 1600410600,
      timezone: -14400,
      base: "",
      clouds: {
        all: 0,
      },
      cod: 200,
      coord: {
        lon: -74.01,
        lat: 40.71,
      },
      id: 5128581,
      visibility: 0,
    };

    const expectedWeather = {
      temperature: {
        current: 293.15,
        feelsLike: 291.86,
        min: 289.82,
        max: 295.37,
      },
      condition: "Clear",
      wind: 3.6,
      humidity: 56,
      geolocation: {
        city: "New York",
        countryCode: "US",
      },
      time: {
        now: new Date(1600410600 * 1000).toISOString(),
        sunrise: new Date(1600410600 * 1000).toISOString(),
        sunset: new Date(1600454400 * 1000).toISOString(),
      },
    };

    const parsedWeather = parseWeatherResponse(response);

    expect(parsedWeather).toEqual(expectedWeather);
  });

  it("should correctly parse the forecast response", () => {
    const response: ForecastResponse = {
      city: {
        sunrise: 1625125200, // Example sunrise timestamp
        sunset: 1625179200, // Example sunset timestamp
        timezone: 3600, // Example timezone offset in seconds (1 hour)
        coord: {
          lat: 40.71, // Example latitude
          lon: -74.01, // Example longitude
        },
        country: "US", // Example country code
        id: 5128581, // Example city ID
        name: "New York", // Example city name
        population: 8550405, // Example population
      },
      list: [
        {
          dt: 1625151600, // Example forecast timestamp
          main: {
            temp: 20.5, // Example temperature
            feels_like: 20.5, // Example feels like temperature
            temp_min: 20.5, // Example minimum temperature
            temp_max: 20.5, // Example maximum temperature
            humidity: 0, // Example humidity
            pressure: 0, // Example pressure
            sea_level: 0, // Example sea level pressure
            grnd_level: 0, // Example ground level pressure
            temp_kf: 0, // Example temperature change
          },
          weather: [
            { main: "Clear", description: "clear sky", icon: "01d", id: 800 }, // Example weather condition
          ],
          clouds: {
            all: 0, // Example cloudiness percentage
          },
          wind: {
            speed: 0, // Example wind speed
            deg: 0, // Example wind direction
            gust: 0, // Example wind gust speed
          },
          dt_txt: "2021-05-31 18:00:00", // Example forecast timestamp text
          pop: 0, // Example precipitation probability
          sys: { pod: "d" }, // Example pod (day)
          visibility: 10000, // Example visibility in meters
        },
      ],
      cnt: 0,
      cod: "200",
      message: 0.0,
    };

    const expected = {
      hours: [
        {
          time: new Date(1625151600 * 1000).toISOString(),
          temperature: 20.5,
          condition: "Clear",
        },
      ],
      sunrise: new Date(1625125200 * 1000).toISOString(),
      sunset: new Date(1625179200 * 1000).toISOString(),
    };

    const result = parseForecastResponse(response);

    expect(result).toEqual(expected);
  });
});
