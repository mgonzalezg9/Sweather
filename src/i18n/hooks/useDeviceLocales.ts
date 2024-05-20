import { useCalendars, useLocales } from "expo-localization";
import i18n from "../";

export default function useDeviceLocales() {
  const [{ timeZone }] = useCalendars();
  const [{ languageCode }] = useLocales();

  return {
    locale: languageCode ?? i18n.locale,
    timeZone: timeZone ?? "UTC",
  };
}
