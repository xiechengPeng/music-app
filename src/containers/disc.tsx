import { connect } from "react-redux";
import { changeSong } from "../actions/disc";
import Disc from "../pages/disc/disc";

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => ({
//   showMusicPlayer: (status) => {
//     dispatch(showPlayer(status));
//   },
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));
    },
//   setSongs: (songs) => {
//     dispatch(setSongs(songs));
//   }
});

export default connect(null, mapDispatchToProps)(Disc)
