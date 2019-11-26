import { commonParams,options } from './config';
import jsonp from '../common/js/jsonp';
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

export function getMusicList(topid) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

    const data = Object.assign({}, commonParams, {
        g_tk: 5381,
        uin: 0,
        platform: "h5",
        needNewCode: 1,
        tpl: 3,
        page: "detail",
        type: "top",
        topid,
        _: new Date().getTime()
    })
    return jsonp(url, data, options);
}
