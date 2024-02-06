import { useEffect, useState } from 'react';
import { getCurrentWeather, getHourlyForecast } from '../../services/weather';
import { Coordinates, Forecast, Weather } from '../../services/weather/types';

export type LocationQuery = {
    location: string;
    coordinates: Coordinates;
};

const getWeatherAndForecast = async ({ location, coordinates }: LocationQuery) => {
    const [weather, forecast] = await Promise.all([
        getCurrentWeather({ location, coordinates }),
        getHourlyForecast({ location, coordinates })
    ])

    return { weather, forecast };
}

export default function useWeatherForecast({ location, coordinates }: LocationQuery) {
    const [weather, setWeather] = useState<Weather>();
    const [forecast, setForecast] = useState<Forecast>();

    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<unknown>();

    useEffect(() => {
        if (!location && !coordinates) {
            return;
        }

        console.log("Requesting weather at location", location || coordinates);
        setLoading(true);

        getWeatherAndForecast({ location, coordinates }).then(({ weather, forecast }) => {
            setWeather(weather);
            setForecast(forecast);
        }).catch(error => {
            console.error(`Unable to retrieve weather at location ${location || coordinates}`);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [location, coordinates]);

    return {
        weather,
        forecast,
        loading: isLoading,
        error: isError
    };
}
