import {dingdingConfig} from '../../../config/dingding/config'
import {dingdingBaseHost} from '../../../config/dingding/config'
import Axios from 'axios'

export class GetAccessToken {
    async get(){
        let token = await Axios.get(`${dingdingBaseHost}/gettoken`,{
            params:dingdingConfig
        }).then((data)=>{
            console.log('getToken',data.data)
            const result = data.data
            return result.errcode === 0 ? result.access_token : ''
        }).catch((err)=>{
            console.log('getToken-err:',err)
        })
        return token
    }
}

