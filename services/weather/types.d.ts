import { ConditionMap } from "./map";

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
    sunrise: number;
    sunset: number;
    city: string;
    countryCode: string;
};

type TimeForecast = {
    time: string;
    condition: Condition;
    temperature: number;
}

export type Forecast = TimeForecast[];

export type Coordinates = {
    latitude: number;
    longitude: number;
};

export type Condition = keyof typeof ConditionMap;