export type Weather = {
    temperature: {
        current: number;
        feelsLike: number;
        min: number;
        max: number;
    };
    condition: string;
    wind: number;
    humidity: number;
    geolocation: {
        city: string;
        countryCode: string;
    };
    time: {
        now: string;
        sunrise: string;
        sunset: string;
    };
};

type TimeForecast = {
    time: string;
    condition: Condition;
    temperature: number;
}

export type Forecast = {
    hours: TimeForecast[];
    sunrise: string;
    sunset: string;
};

export type Coordinates = {
    latitude: number;
    longitude: number;
};