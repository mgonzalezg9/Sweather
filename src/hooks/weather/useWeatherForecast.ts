import { useEffect, useState } from 'react';
import { getCurrentWeather, getHourlyForecast } from '../../services/weather';
import { Forecast, Weather } from '../../services/weather/types';

export default function useWeatherForecast({ location, coordinates }) {
    const [weather, setWeather] = useState<Weather>();
    const [forecast, setForecast] = useState<Forecast>();

    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<unknown>();

    useEffect(() => {
        try {
            console.log("Requesting weather at location", location || coordinates);
            setLoading(true);

            getCurrentWeather({ location, coordinates }).then(w => setWeather(w))
            getHourlyForecast({ location, coordinates }).then(f => setForecast(f))

            setWeather(weather)
        } catch (error) {
            console.error("Unable to retrieve weather at location");
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [location, coordinates]);

    return {
        weather,
        forecast,
        loading: isLoading,
        error: isError
    };
}
