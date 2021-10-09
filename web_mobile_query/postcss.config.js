module.exports = {
  plugins: {
    autoprefixer: {},
    //  postcss-pxtorem 插件版本需要 ==>> 5.0.0
    // flexible配置
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度的1/20(750/20)
      propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    }
  }
}
