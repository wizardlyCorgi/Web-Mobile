// 抽取api路径
/* *做api的封装
 * @param https 导入封装好的axios
 * api多的时候可以考虑再封装解耦
 */

import https from '../utils/https'
export const getData = function (params) {
  return https.get('/mode2/DataOne', { params })
}
