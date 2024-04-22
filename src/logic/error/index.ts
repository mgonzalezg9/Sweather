export enum SweatherErrorCode {
    USER_LOCATION_DENIED = 'USER_LOCATION_DENIED',
    WEATHER_SERVICE_ERROR = 'WEATHER_SERVICE_ERROR',
}

// Map matching error codes with i18n locales
export const SWEATHER_ERROR_MESSAGE_MAP: Record<SweatherErrorCode, string> = {
    [SweatherErrorCode.USER_LOCATION_DENIED]: 'locationDisabledError',
    [SweatherErrorCode.WEATHER_SERVICE_ERROR]: 'weatherServiceError'
} as const;