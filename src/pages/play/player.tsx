import React from 'react';
import { Icon } from 'antd';
import './player.css';
import Progress from './Progress';
import { connect } from "react-redux";
import { changeSong,showPlayer } from "../../actions/actions";
import { CSSTransition } from "react-transition-group";
interface Iprops{
    showStatus:string,
    showMusicPlayer:any
}
class player extends React.Component<Iprops>{
    // 背景图ref
    public playerBgRef:any;
    constructor(props){
        super(props);
        this.playerBgRef = React.createRef();
    }
    public state={
        // playerBgRef:React.createRef()
        retweet:'retweet',
        show:true
    }

    changePlayMode(type:string):void{
        if(type==='retweet'){
            this.setState({
                retweet:'branches'
            })
        }else if(type==='branches'){
            this.setState({
                retweet:'login'
            })
        }else if(type==='login'){
            this.setState({
                retweet:'retweet'
            })
        }
    }
    componentDidMount(){
        console.log(this.props.showMusicPlayer(),'/????')
        // this.playerBgRef= React.createRef();
    }
    render(){

        return (
            <div className="player">
            {/* <CSSTransition  in={this.state.show} timeout={300} classNames="fade" unmountOnExit> */}
                <div className="header">
                    <span className="header-back">
                        <Icon type="left" style={{'fontSize':'20px',color:'#ffcd32'}}/>
                    </span>
                    <div className="header-title">
                        桥边菇凉
                    </div>
                </div>
                <div className="singer-top">
                    <div className="singer">
                        <div className="singer-name">海伦</div>
                    </div>
                </div>
                <div className="singer-middle">
                     <div className="singer-img">
                        <img src="http://y.gtimg.cn/music/photo_new/T002R300x300M0000037Yq3H3RznaX.jpg?max_age=2592000"  onLoad={
                        () => {
                            /* 图片加载完成后设置背景，防止图片加载过慢导致没有背景 */
                            this.playerBgRef.current.style.backgroundImage = `url("http://y.gtimg.cn/music/photo_new/T002R300x300M0000037Yq3H3RznaX.jpg?max_age=2592000")`;
                        }
                        } />
                    </div>
                </div>
                <div className="singer-bottom">
                    <div className="controller-wrapper">
                        <div className="progress-wrapper">
                            <span className="current-time">0:00</span>
                            <div className="play-progress">
                                <Progress></Progress>
                            </div>
                            <span className="total-time">3:03</span>
                        </div>
                        <div className="play-wrapper">
                            <div className="play-model-button">
                                <Icon type={this.state.retweet} style={{fontSize:'24px'}} onClick={this.changePlayMode.bind(this,this.state.retweet)} />
                            </div>
                            <div className="previous-button">
                                <Icon type="left-circle" style={{fontSize:'28px'}} />
                            </div>
                            <div className="play-button">
                                <Icon type="play-circle" />
                            </div>
                            <div className="next-button">
                                <Icon type="right-circle" style={{fontSize:'28px'}} />
                            </div>
                            <div className="play-list-button">
                                <Icon type="align-right" style={{fontSize:'24px'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="player-bg" ref={this.playerBgRef}></div>
                {/* </CSSTransition> */}
            </div>
        )
    }
}
// 映射Redux全局的state到组件的props上
// const mapStateToProps = (state) => ({
//     currentSong: state.song,
//     playSongs: state.songs,
//     showStatus:state.showStatus
// });
const mapStateToProps = (state) => {
    console.log(state,'++++++++++state')
};

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => ({
    showMusicPlayer: (status) => {
        dispatch(showPlayer(status));
    },
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(player);