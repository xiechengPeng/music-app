import { connect } from "react-redux";
import { showPlayer,setSongs,changeSong} from "../actions/actions";
import RankItem from "../pages/rankItem/rankItem";

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => ({
    showMusicPlayer: (status) => {
        dispatch(showPlayer(status));
    },
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));
    },
    setSongs: (songs) => {
        dispatch(setSongs(songs));
    }
});

export default connect(null, mapDispatchToProps)(RankItem);
