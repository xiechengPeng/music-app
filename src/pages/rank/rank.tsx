import React from 'react';
import { connect } from 'react-redux';
import { getrankList } from '../../api/rank';
import './rank.css';
import LazyLoad from 'react-lazy-load';


class Rank extends React.Component{
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
    // componentWillMount(){

    // };
    componentDidMount(){
        this.getRankList();
    };
    render(){
        return (
            <div className="rank">
                <div className="rank-box">
                    <ul>
                            {
                                this.state.topList.map((item,index)=>(
                                    <li key={index}>
                                        <div className="rank-box-img">
                                            <LazyLoad>
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