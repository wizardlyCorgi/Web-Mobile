import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { innerLocale } from './inner-locale'

const SUPPORT_LANG = {
  CN: 'zh-CN',
  EN: 'en-US'
}

/**
 * 获取浏览器默认语言
 * @returns {String}
 */
const getBrowserLang = function () {
  const browserLang = navigator.language
    ? navigator.language
    : navigator.browserLanguage
  let defaultBrowserLang = ''
  if (
    browserLang.toLowerCase() === 'cn' ||
    browserLang.toLowerCase() === 'zh' ||
    browserLang.toLowerCase() === 'zh-cn'
  ) {
    defaultBrowserLang = SUPPORT_LANG.CN
  } else {
    defaultBrowserLang = SUPPORT_LANG.EN
  }
  return defaultBrowserLang
}

Vue.use(VueI18n)

localStorage.m_lang = localStorage.m_lang ?? getBrowserLang()

const i18n = new VueI18n({
  locale: localStorage.m_lang
})

/**
 * 初始化内置翻译
 */
for (const key in SUPPORT_LANG) {
  if (Object.hasOwnProperty.call(SUPPORT_LANG, key)) {
    const lang = SUPPORT_LANG[key]
    i18n.setLocaleMessage(lang, innerLocale[lang])
  }
}

VueI18n.prototype.supportLang = SUPPORT_LANG

export default i18n
