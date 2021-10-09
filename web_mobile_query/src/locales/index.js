import VueI18n from 'vue-i18n'
import { Locale } from 'vant'
import i18n from './i18n'
import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
/**
 *
 * @param {Array<String>} keys 指定键
 * @param {*} config 配置
 */
VueI18n.prototype.GetOptionalLocaleData = function (keys, config) {
  return new Promise((resolve, reject) => {
    const key = `${window.settings.sysName}_${localStorage.m_lang}`
    const DataStr = localStorage.getItem(key)
    let data = {}
    if (DataStr !== undefined && DataStr !== null) {
      // 得到数据，获取数据和版本号，格式：{ "key":{ value:"" , version:"" } }
      data = JSON.parse(DataStr)
    }
    // 构建请求参数,告诉服务端请求的语言，键，以及对应键的版本号
    const requestData = {
      tenantId: window.settings.tenantId,
      lang: localStorage.m_lang,
      type: 'multi-lang',
      FetchLatestData: true,
      keys: {}
    }
    Object.assign(requestData, config)
    // 待请求的key
    for (let index = 0; index < keys.length; index++) {
      requestData.keys[keys[index]] = null
    }
    // 填充版本信息
    for (const property in requestData.keys) {
      if (Object.hasOwnProperty.call(data, property)) {
        requestData.keys[property] = data[property].version
      }
    }
  })
}
/**
 *
 * @param {String} lang 语言
 */
VueI18n.prototype.vantLocales = function (lang) {
  if (lang === i18n.supportLang.EN) {
    Locale.use(lang, enUS)
  } else if (lang === i18n.supportLang.CN) {
    Locale.use(lang, zhCN)
  }
}

i18n.vantLocales(i18n.locale)
export default i18n
