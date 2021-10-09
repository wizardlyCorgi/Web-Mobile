// 定义之后需要在入口文件引入使用
import Vue from 'vue'
Vue.directive('title', function (el, binding) {
  document.title = binding.value
})
