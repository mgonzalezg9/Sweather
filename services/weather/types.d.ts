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
    sunrise: Date;
    sunset: Date;
    city: string;
    countryCode: string;
};

type TimeForecast = {
    time: Date;
    condition: Condition;
    temperature: number;
}

export type Forecast = TimeForecast[];

export type Coordinates = {
    latitude: number;
    longitude: number;
};