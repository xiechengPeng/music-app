import React from 'react';
import './musicPlayer.css';
import PlayerList from './playerList';
import Player from './player';

class musicPlayer extends React.Component{

    public state={
        show:false
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className="music-player">
                {
                    this.state.show?<Player></Player>:''
                }
                {/* <Player></Player> */}
                {/* <PlayerList></PlayerList> */}
            </div>
        )
    }
}
export default musicPlayer;