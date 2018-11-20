import { Get,Controller } from "../decorator/router";
@Controller('/')
export default class Index{
    @Get("")
    async Index(ctx,next) {
        console.log('err,data')
        await ctx.render('../views/index.ejs',{title:'index'})
        console.log('end')
    }
}