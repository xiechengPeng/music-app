import React from 'react';
import Slider from "../../base/slider/slider";
import { connect } from 'react-redux';
// import { Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
// import { getDiscList } from "../../actions/recommend";
import { getDiscList } from '../../api/recommend';
import './recommend.css';
import LazyLoad from 'react-lazy-load';
import { renderRoutes } from "react-router-config"
export interface IProps{
    match:Imatch,
    history:any,
    route:any
}
interface Imatch{
    url:string
}
class Recommend extends React.Component<IProps>{
    constructor(props){
        super(props);
    }
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
        console.log(this.props,'ss')
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
                                    <li key={inx} onClick={this.selectItem.bind(this,`${match.url}/${item.dissid}`)}>
                                        {/* <Link to={`/${match.url}/${item.dissid}`}> */}
                                            <div className="icon">
                                                <LazyLoad height={60}>
                                                    <img src={item.imgurl} alt=""/>
                                                </LazyLoad>
                                            </div>
                                            <div className="text">
                                                <h3 className="name">{item.creator.name}</h3>
                                                <p className="desc">{item.dissname}</p>
                                            </div>
                                        {/* </Link> */}
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Recommend));