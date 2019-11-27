import React from 'react';
import { Icon } from 'antd';
import './music-list.css';
import SongList from '../../base/song-list/song-list';
import { CSSTransition } from "react-transition-group";

interface IProps{
    musicData:any,
    title:string,
    bgimage:string
}
class musicList extends React.Component<IProps>{
    public state={
        show:false
    }
    componentDidMount(){
        this.setState({
            show: true
        });
    }
    back(){
        this.setState({
            show: false
        });
        //退出动画
        setTimeout(()=>{
            window.history.go(-1);
        },100)
    }
    render(){
        let { musicData,bgimage,title} = this.props;
        return (
            <CSSTransition in={this.state.show} timeout={300} classNames="fade" unmountOnExit>
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
            </CSSTransition>
        )
    }
}
export default musicList;