import React from 'react';
import Slider from "../../base/slider/slider";
import { getDiscList } from '../../api/recommend';
import './recommend.css';
import LazyLoad, { forceCheck } from "react-lazyload"
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";

export interface IProps{
    match:Imatch,
    history:any,
    route:any
}
export interface Imatch{
    url:string
}
class Recommend extends React.Component<IProps>{
    public state={
        dataList:[],
    };
    async _getDiscList(){
        getDiscList().then((res)=>{
            if(res.code===0){
                this.setState({
                    dataList:res.data.list
                })
            }

        })
    };
    selectItem(url:string):any{
        this.props.history.push({
            pathname: url
        })
    };
    componentDidMount(){
        this._getDiscList();
    };
    public render(){
        const { match,route } = this.props;
        return (
            <div className="recommend" onScroll={e=>forceCheck()}>
                <Slider></Slider>
                <div className="recommend-box">
                    <div className="mend-title">
                        热门歌单推荐
                    </div>
                    <div className="mend-list">
                        <ul>
                            {
                                this.state.dataList.map((item,inx)=>(
                                    <li key={inx} onClick={this.selectItem.bind(this,`${match.url}/${item.dissid}`)}>
                                        <div className="icon">
                                            <LazyLoad height={60} placeholder={<img src={require("../../assets/music.png")} alt="music" />}>
                                                <img src={item.imgurl} alt=""/>
                                            </LazyLoad>
                                        </div>
                                        <div className="text">
                                            <h3 className="name">{item.creator.name}</h3>
                                            <p className="desc">{item.dissname}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                { renderRoutes(route.routes) }
            </div>
        )
    }
}

export default Recommend;