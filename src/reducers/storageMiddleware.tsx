import * as ActionTypes from "../types/index";
import localStorage from "../common/js/storage";

/**
 * 本地存储中间件
 */
const storage = store => next => action => {
    let result = next(action);
    switch (action.type) {
        case ActionTypes.CHANGE_SONG:
            // 设置当前歌曲
            localStorage.setCurrentSong(action.song);
        break;
            case ActionTypes.SET_SONGS:
            // 设置播放歌曲列表
            localStorage.setSongs(store.getState().songs);
        break;
            case ActionTypes.REMOVE_SONG_FROM_LIST:
            // 移除歌曲
            let newSongs = store.getState().songs.filter(song => song.id !== action.id);
            localStorage.setSongs(newSongs);
        break;
    }
    return result;
}

export default storage;
