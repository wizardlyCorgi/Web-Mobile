// 解耦混入
import testMixin from './test-mixin'
// 导出之后直接在组件中引入使用,配置项中需要配置 : mixins:[testM,...]
// 不需要在入口文件使用
export const testM = testMixin
