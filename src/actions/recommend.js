import { API_RECOMMEND_GET_LIST } from '../api/utilApi/recommend';

import { GET_RECOMMEND_LIST } from '../types/recommend';

export const TypeGetDiscList = (payload) => {
    return {
        type: GET_RECOMMEND_LIST,
        payload
    }
}

export function getDiscList(){
    return fetch({
        url: API_RECOMMEND_GET_LIST,
        action: TypeGetDiscList,
        data:{
            
        }
    })
}