import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import en from './locales/en';
import es from './locales/es';

const i18n = new I18n({
    en,
    es
})
i18n.defaultLocale = Localization.getLocales()[0].languageTag;
i18n.enableFallback = true;

export default i18n;