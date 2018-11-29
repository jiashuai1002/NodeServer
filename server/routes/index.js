import {
    Get,
    Controller
} from "../decorator/router"
import {
    queryFromMysql
} from '../middleware/db'
import {
    GetAccessToken
} from '../services/DingDing/getAccessToken'
import {
    SendGroupMsg
} from '../services/DingDing/sendGroupMsg'
@Controller('/')
export default class Index {
    @Get("")
    async IndexRouter(ctx, next) {
        // console.log('err,data')
        // let sql = 'SELECT * FROM t_service_apply_info'
        // let dataList = await queryFromMysql( sql )
        // await ctx.render('../views/index.ejs',{title:'index'})
        // console.log(dataList)
        // await console.log(GetAccessToken.get())
    }
}