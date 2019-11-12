import { commonParams,options } from './config';
// import jsonp from '../common/js/jsonp';
import axios from 'axios';

export function getrankList() {
    const url = '/api/getrankList';

    const data = Object.assign({}, commonParams, options ,{
        uin: 0,
        needNewCode: 1,
        platform: 'h5',
    })

    // return jsonp(url, data, options);
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}