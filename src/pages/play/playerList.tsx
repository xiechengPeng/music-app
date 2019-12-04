import React from 'react';
import { connect } from "react-redux";
import { changeSong } from "../../actions/player";
import { removeSong } from "../../actions/playerList";
interface Iprops{
    playSongs:any
}
class playerList extends React.Component<Iprops>{
    render(){
        let playList = this.props.playSongs;
        console.log(playList,'......')
        return (
            <div className="player-list">
                
            </div>
        )
    }
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    currentSong: state.song,
    playSongs: state.songs
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => ({
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));
    },
    removeSong: (id) => {
        dispatch(removeSong(id));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(playerList);