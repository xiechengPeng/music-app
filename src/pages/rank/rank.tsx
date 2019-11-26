import React from 'react';
import { connect } from 'react-redux';
import { getrankList } from '../../api/rank';
import './rank.css';
import LazyLoad, { forceCheck } from "react-lazyload"
import { renderRoutes } from "react-router-config";

export interface IProps{
    match:Imatch,
    history:any,
    route:any
}
export interface Imatch{
    url:string
}
class Rank extends React.Component<IProps>{
    public state={
        topList:[]
    }
    async getRankList(){
        getrankList().then((res)=>{
            try {
                if(res.code===0){
                    this.setState({
                        topList:res.data.topList
                    })
                }
            } catch (error) {
                console.log(error)
            }
        })
    }
    rankItem(url:string):void{
        this.props.history.push({
            pathname: url
        })
    };
    componentDidMount(){
        this.getRankList();
    };
    render(){
        const { match,route } = this.props;
        return (
            <div className="rank" onScroll={e=>forceCheck()}>
                <div className="rank-box">
                    <ul>
                            {
                                this.state.topList.map((item,index)=>(
                                    <li key={index} onClick={this.rankItem.bind(this,`${match.url}/${item.id}`)}>
                                        <div className="rank-box-img">
                                            <LazyLoad placeholder={<img src={require("../../assets/music.png")} alt="music" />}>
                                                <img src={item.picUrl} alt=""/>
                                            </LazyLoad>
                                        </div>
                                        <div className="rank-box-content">
                                            {
                                                item.songList.map((songItem,inx)=>(
                                                    <div className="rank-box-sp" key={inx}>
                                                        <span>{inx + 1}</span>
                                                        <span>{songItem.songname}-{songItem.singername}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </li>
                                ))
                            }
                    </ul>
                </div>
                { renderRoutes(route.routes) }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (id, params) => {
            dispatch()
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Rank);