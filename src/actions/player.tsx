import { CHANGE_SONG } from '../types/index';

export const changeSong = (song) => {
    return {
        type: CHANGE_SONG,
        song
    }
}