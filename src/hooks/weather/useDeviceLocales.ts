import { locale } from '@/i18n/localization';
import { useCalendars, useLocales } from 'expo-localization';

export default function useDeviceLocales() {
    const [{ timeZone }] = useCalendars();
    const [{ languageCode }] = useLocales();

    return {
        locale: languageCode ?? locale,
        timeZone: timeZone ?? 'UTC',
    }
}