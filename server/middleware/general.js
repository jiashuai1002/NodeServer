import bodyParser from 'koa-bodyparser'
import session from 'koa-session'
import koaViews from 'koa-views'
import koaJson from 'koa-json'
import koaOnerror from 'koa-onerror'
import koaLogger from 'koa-logger'
import KoaStatic from 'koa-static'
import { resolve } from 'path'

const r = path => resolve(__dirname, path)

export const useViews = app => {
  app.use(koaViews(r('../views'), {
    extension: 'ejs'
  }))
}

export const addBodyParser = app => {
  app.use(bodyParser())
}

export const addLogger = app => {
  app.use(koaLogger())
  app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
}

export const handdleError = app => {
  koaOnerror(app)
  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });
}

export const publicSpace = app => {
  app.use(KoaStatic(r('../../public')))
} 



export const addSession = app => {
  app.keys = ['guanyun']

  const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: false, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
  }
  app.use(session(CONFIG, app))
}
