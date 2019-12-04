import { combineReducers } from 'redux';
import * as ActionTypes from '../types/index';
import localStorage from '../common/js/storage';

/**
 * reducer就是一个纯函数，接收旧的state和action，返回新的state
 */

// 需要存储的初始状态数据
const initialState = {
    skin: localStorage.getSkin(),  // 皮肤
    showStatus: false,  // 显示状态
    song: localStorage.getCurrentSong(),  // 当前歌曲
    songs: localStorage.getSongs()  // 歌曲列表
};

// 显示或隐藏播放状态
function showStatus(showStatus = initialState.showStatus, action) {
    switch (action.type) {
        case ActionTypes.SHOW_PLAYER:
            return action.showStatus;
        default:
            return showStatus;
    }
}

const songs = (state = null, action) => {
    console.log(action,'//appp222p')
    switch (action.type){
        case ActionTypes.SET_SONGS:
            console.log(action,'ooooo')
            const detail = {...action.songs};
            return detail;
        case ActionTypes.REMOVE_SONG_FROM_LIST:
            const newSongs = {...action.songs};
            return newSongs;
        default:
            return state;
    }
}

const reducer = combineReducers({
    showStatus,
    songs
})

export default reducer;