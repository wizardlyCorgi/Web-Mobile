# web_mobile_query

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 说明

### 该项目用于练习移动端架构以及简单的功能

### 命名规范及路径引入

#### 命名规范

1. 所有文件夹和文件名均采用全小写（多个单词之间采用“-”相连）；

2. 所有变量，函数采用驼峰命名法；

3. 所有常量采用全大写(多个单词之间采用"_"相连)

4. 所有组件命名采用PascalCase（每个单词首字母大写）规则，引用(在页面上使用)时使用kebab-case（全小写，单词之间用-连接）

#### 路径引入问题

在vue.config.js中加入通用模块(文件夹)的别名

如：assets,components,utils,views等(router,store不需配置)

所有除开当前目录的引用使用``./``外，所有其他层级引用都使用别名，注意对样式和图片引用需要加``~``

```js
// 例如:
@import "~assets/css/base.css", 
<img src="~assets/img/logo.png"/>
```

### 框架目录说明

目录名称|目录说明
--|:--
public/| html与不需要经过webpack打包的资源目录
src/| 主要项目目录，建议静态资源不要放在public中
src/assets|存放相关静态资源（css、js、img）
<!-- src/locales|多语言相关处理目录 -->
src/mixins|混入相关目录
<!-- src/directives|自定义指令相关目录 -->
src/services|api存放目录，项目api比较多可考虑分类
src/utils/http.js|发起请求进行封装，添加拦截器，在获取数据以后可以对数据进行解构、修改、操作、过滤等操作设置一些axios参数、如请求超时时间、返回数据格式等等引入qs包对json数据进行包装，防止字符被转义
src/components|存放页面相关组件、架构通用组件
src/plugins|第三方组件引入，也可直接写在main.js文件中，方便管理
src/router|配置页面路由
src/store|vuex配置文件
src/views|vue页面文件
/mock|mock数据目录，只需要在mock-data.js中定义需要的mock数据接口

#### 2021年10月8日
1. 移动端适配方案
    基于lib-flexible和postcss-pxtorem
    根据设计稿的尺寸可以修改postcss.config.js的rootValue,例如尺寸为750

2. UI组件库插件引入
    组件库采用 vant
    ```
    // 一,安装插件
    npm i vant -S
    npm i babel-plugin-import -D // 自动引入对应的样式,减少css体积
    ```
    采用局部引入新建一个vant.js来引入需要的组件
    ```
    // 二,在 babel.config.js 中配置(配置修改需要重启脚手架)
    module.exports = {
        plugins: [
            ['import', {
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
            }, 'vant']
        ]
    };
    ```
    ```
    // 三,在 main.js 中引入vant.js
    import './plugins/vant'
    ```

3. 设置基础样式 base.css

4. 封装axios请求以及api请求地址抽取

5. common组件/公共组件
    404.vue
    Callback.vue
    SignOut.vue
    水印组件

// 6,7,8都是在Vue官网可以熟悉的

6. vue.config.js配置(有待加强)

7. 国际化语言配置(暂时不会)i18n的使用

8. 指令方面(不熟悉)directives
    页面的页头
    权限