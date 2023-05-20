import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ur from './ur.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getLang = async () => {
    try {
        const val = await AsyncStorage.getItem('lan');
        return val;
    } catch (e) {
        // Handle any errors
        console.error(e);
    }
};

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en', // Set a default fallback language
        react: {
            useSuspense: false,
        },
        resources: {
            en: en,
            ur: ur,
        },
        interpolation: {
            escapeValue: false, // React already protects against XSS
        },
    })
    .then(() => {
        getLang().then((lang) => {
            if (lang) {
                i18n.changeLanguage(lang);
            }
        });
    });

export default i18n;
