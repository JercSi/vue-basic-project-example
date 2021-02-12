import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import { DEFUALT_LOCALIZATION } from '@/config'

Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: localStorage.lang || DEFUALT_LOCALIZATION, // set locale
  fallbackLocale: DEFUALT_LOCALIZATION,
  messages: {
    'en': require('@/locales/en.json'),
    'fr': require('@/locales/fr.json'),
    'es': require('@/locales/es.json'),
  }
})

const loadedLanguages = [] // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  localStorage.lang = lang // Save to storage for next use
  return lang
}

export function loadLanguageAsync(lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}.json`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}

export default i18n