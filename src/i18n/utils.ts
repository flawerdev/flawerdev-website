import es from "./locales/es.json";
import en from "./locales/en.json";

const translations = { en, es };

export function useTranslations(lang: "en" | "es") {
    return function translate(key: string) {
        const keys = key.split(".");
        let value: any = translations[lang];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };
}