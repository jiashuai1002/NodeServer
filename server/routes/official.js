import {
    Post,
    Controller,
    Get
} from "../decorator/router"
import {
    SendGroupMsg
} from '../services/DingDing/sendGroupMsg'
// var Redis = require('ioredis');
// var redis = new Redis();
import Redis from 'ioredis'
@Controller("/official")
export default class OffiCialRouter {
    @Post("/infos")
    // @TODO 
    async OffiCialInfos(ctx, next) {
        const userIp = ctx.ip
        const userUrl = ctx.host
        const userAgent = ctx.header['user-agent']
        let redis = new Redis()
        redis.set('a',123)
        redis.expire('a',3)
        const times = await redis.get('a', (err,result) => {
            return result
        })
        ctx.body = {
            meta: {
                conditions: ctx.request.body,
                // errorCode: 1000,
                errorMsg: "正常",
                trackMsg: "Success",
            }
        }
        // new SendGroupMsg().sendMsg({
        //     'title': 'test',
        //     'text': `   ### 【请关注新用户体验申请】
        //                 \n姓名: 111 
        //                 \n电话: 111 
        //                 \n公司邮箱: 11 
        //                 \n公司名称: 11
        //                 \n用户IP: 172.16.100.98( XX/XX/内网IP/内网IP)
        //                 \n来源网址: http://test.guanyun.fonova.cn/official.html
        //                 \n提交时间: 2018/10/15 17:49:10
        //                 \n浏览器: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0
        //                 \n观云服务中心-体验申请 17:49:10
        //             `


        // })
    }
}