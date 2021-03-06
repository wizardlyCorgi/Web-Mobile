const express = require('express') // 引入express
const Mock = require('mockjs') // 引入mock
const app = express() // 实例化express
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// })
app.use((request, response, next) => {
  console.log('有人请求服务器1了')
  console.log('请求来自于', request.get('Host'))
  console.log('请求的地址', request.url)
  next()
})

app.post('/mode2/DataOne', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      'dataSource|1-9': [
        {
          'key|+1': 1,
          'mockTitle|1': ['肆无忌惮'],
          'mockContent|1': [
            '角色精湛主题略荒诞',
            '理由太短 是让人不安',
            '疑信参半 却无比期盼',
            '你的惯犯 圆满',
            '别让纠缠 显得 孤单'
          ],
          'mockAction|1': ['下载', '试听', '喜欢']
        }
      ]
    })
  )
})
console.log()

console.log('有人')

app.listen('8090', () => {
  console.log('监听端口 8090')
})
