import { commonParams,options } from './config';
import axios from 'axios';

export function getHotSearchList() {
    const url = '/api/getHotSearchList';

    const data = Object.assign({}, commonParams, options, {
        uin: 0,
        needNewCode: 1,
        platform: 'h5'
    });

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}