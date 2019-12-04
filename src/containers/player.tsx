import { connect } from "react-redux";
import { changeSong ,showPlayer} from "../actions/actions";
import MusicPlayerr from "../pages/play/musicPlayer";

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    currentSong: state.song,
    playSongs: state.songs
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => ({
    showMusicPlayer: (status) => {
        dispatch(showPlayer(status));
    },
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));
    }
});

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerr)
