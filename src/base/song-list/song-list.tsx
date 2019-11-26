import React from 'react';

interface IProps{
    songData:any,
}
class songList extends React.Component<IProps>{
    getDesc(song){
        return `${song.singer}·${song.album}`;
    }
    render(){
        let { songData } = this.props
        return (
            <div className="disc-content">
                <ul>
                    {
                        songData.map((song,inx)=>(
                            <li key={inx}>
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