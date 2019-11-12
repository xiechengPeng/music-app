import * as types from '../types/recommend';
const tiger = 10000;
const recommend = (state = tiger, action) => {
    console.log(action,'//apppp')
    switch (action.type){
        case types.GET_RECOMMEND_LIST:
            const detail = {...action.payload};
            return detail;
        default:
            return state;
    }
}
export default recommend;