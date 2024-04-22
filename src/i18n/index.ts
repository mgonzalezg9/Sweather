import { I18n } from "i18n-js";
import en from './locales/en';
import es from './locales/es';
import { locale } from "./localization";

const i18n = new I18n({
    en,
    es
})
i18n.locale = locale;
i18n.defaultLocale = 'en';
i18n.enableFallback = true;

export default i18n;