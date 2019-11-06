import { commonParams } from './config';
import axios from 'axios';

export function getDiscList() {
    // 线上环境地址，需要配置修改
    const url = '/api/getDiscList';

    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    })

    return axios.get(url, {
        // headers: {
        //     "Referer": 'https://c.y.qq.com/',
        //     "Host": 'c.y.qq.com',
        // },
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}