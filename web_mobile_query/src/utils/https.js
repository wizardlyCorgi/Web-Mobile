// 封装axios
// 配置会以一个优先顺序进行合并。
// 这个顺序是：在 lib / defaults.js 找到的库的默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。
// 后者将优先于前者
// 导入axios
import axios from 'axios'

// 导入页面提示Message****element-ui局部导入
// import Message from 'element-ui'

// 新建一个axios实例并配置
const serve = axios.create({
  // 配置基地址 配置环境变量可以更灵活方便
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  //   baseURL: process.env.VUE_APP_BASEURL,
  baseURL: 'http://localhost:8080',
  // 配置超时时间(单位毫秒)
  timeout: 3 * 1000
})
// 请求拦截器
serve.interceptors.request.use(
  config => {
    console.log(config)
    // 发送请求前做的一些处理 数据转化/配置请求头/设置token/设置loading等等
    // 数据转化
    config.data = JSON.stringify(config.data)
    // 配置请求头
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // 设置token
    // const token = ''
    // if (token) {
    //   config.params = { token } // 携带在参数中
    //   config.headers.token = token // 携带在请求头中
    // }
    // 返回config配置
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截
serve.interceptors.response.use(
  response => {
    console.log(response, 44)
    // 接收响应数据并成功后的一些共有的处理,关闭loading等
    return response
  },
  error => {
    /** 接收到异常响应的处理开始**/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权,请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          window.location.href = '/NotFound'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
        //   break
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        // Message.error('服务器响应超时，请刷新当前页')
      }
      error.message = '连接服务器失败'
    }
    return Promise.resolve(error.response)
  }
)
export default serve
