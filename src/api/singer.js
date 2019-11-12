import { commonParams,options } from './config';
// import jsonp from '../common/js/jsonp';
import axios from 'axios';

export function getSingerList(){
    const url = '/api/getSingerList';

    const data = Object.assign({}, commonParams, options,{
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    });

    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}