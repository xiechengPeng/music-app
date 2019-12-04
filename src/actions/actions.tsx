import * as ActionTypes from '../types/index';

export const changeSong = (song) => {
    return {
        type: ActionTypes.CHANGE_SONG,
        song
    }
}
export const removeSong = (id) => {
    return {
        type: ActionTypes.REMOVE_SONG_FROM_LIST,
        id
    }
}

export const showPlayer = (showStatus) => {
    return {
        type: ActionTypes.SHOW_PLAYER,
        showStatus
    }
}


export function setSongs(songs) {
    return { 
        type: ActionTypes.SET_SONGS, 
        songs 
    };
}
