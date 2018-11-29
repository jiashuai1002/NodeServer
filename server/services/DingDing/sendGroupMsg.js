import {
    GetAccessToken
} from './getAccessToken'
import {
    dingdingBaseHost
} from '../../../config/dingding/config'
import Axios from 'axios'

export class SendGroupMsg {
    constructor() {}
    async sendMsg(PText) {
        const token = await new GetAccessToken().get()
        Axios.post(`${dingdingBaseHost}/chat/send?access_token=${token}`, {
            "chatid": "chateba6bb10a27e6438565be22207c7bdbd",
            "msg": {
                "msgtype": "markdown",
                "markdown": PText
            }
        }).then((data) => {
            console.log('sendMsg', data.data)
            const result = data.data
            if (result.errcode === 0) {

            } else {

            }
        }).catch((err) => {
            console.log('sendMsg-err:', err)
        })
    }
}