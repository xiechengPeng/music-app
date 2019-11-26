import React from 'react';
import { Icon } from 'antd';
import './music-list.css';
import SongList from '../../base/song-list/song-list'
interface IProps{
    musicData:any,
    title:string,
    bgimage:string
}
class musicList extends React.Component<IProps>{
    back(){
        window.history.go(-1);
    }
    render(){
        let { musicData,bgimage,title} = this.props
        return (
            <div className="music-list">
                <div className="disc-top">
                    <div className="disc-img">
                        <div className="disc-title">
                            <Icon type="left" style={{'fontSize':'20px',color:'#ffcd32'}} onClick={this.back.bind(this)}/>
                            <h3>{title}</h3>
                        </div>
                        <img src={bgimage} alt=""/>
                    </div>
                    <SongList songData={musicData}></SongList>
                </div>
            </div>
        )
    }
}
export default musicList;