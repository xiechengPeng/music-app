import React from 'react';
import Slider from "../../base/slider/slider";
import { connect } from 'react-redux';
// import { getDiscList } from "../../actions/recommend";
import { getDiscList } from '../../api/recommend';
import './recommend.css';
import LazyLoad from 'react-lazy-load';
export interface IProps{
    getDetail:()=>void,
}
class Recommend extends React.Component<IProps>{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         taList:dataList
    //     }
    // }
    public state={
        dataList:[],
    }
    async _getDiscList(){
        getDiscList().then((res)=>{
            if(res.code===0){
                this.setState({
                    dataList:res.data.list
                })
            }

        })
    }
    componentDidMount(){
        this._getDiscList();
    }
    public render(){
        // const { getDetail,dataList } =this.props;
        return (
            <div className="recommend">
                <Slider></Slider>
                <div className="recommend-box">
                    <div className="mend-title">
                        热门歌单推荐
                    </div>
                    <div className="mend-list">
                        <ul>
                            {
                                this.state.dataList.map((item,inx)=>(
                                    <li key={inx}>
                                        <div className="icon">
                                            <LazyLoad height={60}>
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
export default connect(mapStateToProps,mapDispatchToProps)(Recommend);