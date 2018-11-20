import Koa from 'koa'
import R from 'ramda'
import { join } from 'path'

const MIDDLEWARES = ['general', 'router']
//遍历引入中间件
const useMiddlewares = (app) => {
    //  数组的每个成员依次执行该函数。
    R.map(
        //将多个函数合并成一个函数，从右到左执行。
        R.compose(
            //每个属性依次执行给定函数，给定函数的参数分别是属性值和属性名，返回原对象。
            R.forEachObjIndexed(
                e => e(app)
            ),
            require,
            name => join(__dirname, `./middleware/${name}`)
        )
    )(MIDDLEWARES)
}

async function start(params) {
    const app = new Koa()
    //   const { port } = config

    await useMiddlewares(app)

    const server = app.listen(3001, (ctx) => {
        // console.log(
        //     process.env.NODE_ENV === 'development' ?
        //     `Open ${chalk.green('http://localhost:' + port)}` :
        //     `App listening on port ${port}`
        // )
    })
}
start()