import { REMOVE_SONG_FROM_LIST } from '../types/index';

export const removeSong = (id) => {
    return {
        type: REMOVE_SONG_FROM_LIST,
        id
    }
}