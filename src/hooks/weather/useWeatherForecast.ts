import { getCurrentWeather, getHourlyForecast } from '@/services/weather';
import { Coordinates, Forecast, Weather } from '@/services/weather/types';
import { useEffect, useState } from 'react';
import useDeviceLocales from './useDeviceLocales';

export type LocationQuery = {
    location: string;
    coordinates: Coordinates;
    device: {
        locale: string;
        timeZone?: string;
    }
};

const getWeatherAndForecast = async ({ location, coordinates, device }: LocationQuery) => {
    const [weather, forecast] = await Promise.all([
        getCurrentWeather({
            location,
            coordinates,
            device
        }),
        getHourlyForecast({
            location,
            coordinates,
            device
        })
    ])

    return { weather, forecast };
}

export default function useWeatherForecast({ location, coordinates }: LocationQuery) {
    const { timeZone, locale } = useDeviceLocales();

    const [weather, setWeather] = useState<Weather>();
    const [forecast, setForecast] = useState<Forecast>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<unknown>();

    useEffect(() => {
        const loadWeather = async () => {
            if (!location && !coordinates) {
                return;
            }

            console.log("Requesting weather at location", location || coordinates);
            setLoading(true);

            try {
                const { weather, forecast } = await getWeatherAndForecast({
                    location,
                    coordinates,
                    device: {
                        locale,
                        timeZone
                    }
                })

                setWeather(weather);
                setForecast(forecast);
            } catch (error) {
                console.error(`Unable to retrieve weather at location ${location || coordinates}`);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadWeather();
    }, [location, coordinates, timeZone, locale]);

    return {
        weather,
        forecast,
        loading: isLoading,
        error: isError
    };
}
