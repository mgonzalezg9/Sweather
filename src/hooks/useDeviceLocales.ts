import i18n from "@/i18n";
import { useCalendars, useLocales } from "expo-localization";

const useDeviceLocales = () => {
  const [{ timeZone }] = useCalendars();
  const [{ languageCode }] = useLocales();

  return {
    locale: languageCode ?? i18n.locale,
    timeZone: timeZone ?? "UTC",
  };
}

export default useDeviceLocales;