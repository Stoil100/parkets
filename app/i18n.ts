import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import LocizeBackend from 'i18next-locize-backend'
import { locizePlugin } from 'locize'
import LastUsed from 'locize-lastused'
import { initReactI18next } from 'react-i18next'

const isDev = import.meta.env.DEV

if (isDev) {
    i18n.use(LastUsed)
}

const locizeOptions = {
    projectId: import.meta.env.VITE_LOCIZE_PROJECT_ID,
    apiKey: import.meta.env.VITE_LOCIZE_API_KEY,
    version: import.meta.env.VITE_LOCIZE_VERSION,
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(LocizeBackend)
    .use(locizePlugin)
    .init({
        debug: isDev,
        fallbackLng: 'bg',
        backend: locizeOptions,
        locizeLastUsed: locizeOptions,
        saveMissing: isDev,
    })

export default i18n
