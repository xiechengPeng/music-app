import { CHANGE_SONG } from '../types/disc';

export const changeSong = (payload) => {
    return {
        type: CHANGE_SONG,
        payload
    }
}