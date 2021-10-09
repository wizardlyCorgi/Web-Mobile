// Vant-ui 组件引用
// 说明文档 https://youzan.github.io/vant/#/zh-CN/home
import Vue from 'vue'
import {
  NavBar,
  TabbarItem,
  Tabbar,
  Button,
  PullRefresh,
  Icon,
  Cell,
  CellGroup,
  Toast,
  // Divider,
  ActionSheet,
  Calendar,
  Field,
  Radio,
  RadioGroup,
  Tag,
  Popup,
  Cascader,
  Uploader,
  Tab,
  Tabs,
  NoticeBar
} from 'vant'

Vue.use(NavBar)
Vue.use(TabbarItem)
Vue.use(Tabbar)
Vue.use(Button)
Vue.use(Toast)
Vue.use(PullRefresh)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
// Vue.use(Divider);
Vue.use(ActionSheet)
Vue.use(Calendar)
Vue.use(Field)
Vue.use(Tag)
Vue.use(Popup)
Vue.use(Cascader)
Vue.use(Uploader)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(NoticeBar)
Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0 })
