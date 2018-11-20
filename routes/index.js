const router = require('koa-router')()
const Axios = require('axios')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
  Axios.get('http://dev.guanyun.fonova.cn:8310/BusinessService/mobile/special/hotTrend?startTime=2018%2F09%2F25&endTime=2018%2F09%2F25&groupIds=89&detailFlag=0&specialFlag=1&mockFlag=0&accountId=1555&userId=224&alertId=89&searchFlag=0&groupId=89')
  .then((data)=>{
    console.log(data.data)
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
