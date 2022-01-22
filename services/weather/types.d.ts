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
    city: string;
    countryCode: string;
};

type TimeForecast = {
    time: Date;
    condition: Condition;
    temperature: number;
}

export type Forecast = {
    hours: TimeForecast[];
    sunrise: Date;
    sunset: Date;
};

export type Coordinates = {
    latitude: number;
    longitude: number;
};