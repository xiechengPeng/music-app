import React from 'react';

interface IProps{
    songData:any,
    setsongs?:any
}
class songList extends React.Component<IProps>{
    getDesc(song){
        return `${song.singer}·${song.album}`;
    }
    songSetSongs(){
        this.props.setsongs()
    }
    render(){
        console.log(this.props,'sfsf')
        let { songData } = this.props
        return (
            <div className="disc-content">
                <ul>
                    {
                        songData.map((song,inx)=>(
                            <li key={inx} onClick={this.songSetSongs.bind(this,song)}>
                                <h3>{song.name}</h3>
                                <p>{song.singer}·{song.album}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default songList;