import { SHOW_PLAYER,SET_SONGS } from '../types/index';

export const showPlayer = (showStatus) => {
    return {
        type: SHOW_PLAYER,
        showStatus
    }
}


export function setSongs(songs) {
    return { 
        type: SET_SONGS, 
        songs 
    };
}
