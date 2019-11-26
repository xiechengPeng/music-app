import React from 'react';
import { connect } from 'react-redux';
import { getSingerList } from '../../api/singer';
import './singer.css';
import SinGer from '../../common/js/singer';
import LazyLoad, { forceCheck } from "react-lazyload";
import { renderRoutes } from "react-router-config";
export interface IProps{
    match:Imatch,
    history:any,
    route:any
}
export interface Imatch{
    url:string
}

const HOT_SINGER = 10;
const HOT_NAME = '热门';
let listHeight=[];
class Singer extends React.Component<IProps>{

    public state={
        singerList:[],
        shortcutList:[],
        currentIndex: 0,
        diff: -1,
        hatHTML:'热门'
    }

    async _getSingerList(){
        getSingerList().then(res=>{
            try {
                if(res.code===0){
                    var ger=this._normalSinger(res.data.list);
                    this.setState({
                        singerList:ger
                    })
                    
                }
            } catch (error) {
                console.log(error)
            }
        })
    };
    bindScroll=(event)=>{
        listHeight=[];
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        let height=0;
        let list=document.getElementsByClassName('list-group');
        for(let i=0;i<list.length;i++){
            let item=list[i];
            height+=item.clientHeight;
            listHeight.push(height);
        }
        //数组添加为0开始
        listHeight.unshift(0);
        //滚动位置
        for(let i=0;i<listHeight.length-1;i++){
            let hei1=listHeight[i];
            let hei2=listHeight[i+1];
            let hat=this.state.singerList[i].title;
            //取dom元素之间的位置
            if(scrollTop >= hei1 && scrollTop < hei2){
                this.setState({
                    currentIndex:i,
                    diff:hei2+scrollTop,
                    hatHTML:hat
                })
                return;
            }
        }

    };
    _normalSinger=(list)=>{
        let map={
            hot:{
                title:HOT_NAME,
                items:[]
            }
        };
        list.forEach((item,index)=>{
            if(index<HOT_SINGER){
                map.hot.items.push(new SinGer({
                    name:item.Fsinger_name,
                    id:item.Fsinger_mid
                }));
            };
            const key=item.Findex;
            if (!map[key]) {
                map[key] = {
                    title: key,
                    items: []
                }
            }
            map[key].items.push(new SinGer({
                name: item.Fsinger_name,
                id: item.Fsinger_mid
            }))
        })
        let ret=[];
        let hot=[];
        let gp=[];
        for(let i in map){
            let val=map[i];
            if(val.title.match(/[a-zA-Z]/)){
                ret.push(val)
            }else if(val.title===HOT_NAME){
                hot.push(val)
            }
        }
        ret.sort((a,b)=>{
            return a.title.charCodeAt(0)-b.title.charCodeAt(0)
        })
        let da=hot.concat(ret);
        for(let j in da){
            gp.push(da[j].title.substr(0,1));
            this.setState({
                shortcutList:gp
            })
        }
        return da;
    };
    // componentWillMount(){
       
    // };
    singerDetail(url:string):void{
        this.props.history.push({
            pathname: url
        })
    };
    componentDidMount(){
        this._getSingerList();
        window.addEventListener('scroll',this.bindScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.bindScroll)
    }

    public render(){
        const { match,route } = this.props;
        return (
            <div className="singer" onScroll={e=>forceCheck()}>
                <div className="singer-box">
                    <ul>
                        {
                            this.state.singerList.map((item,index)=>(
                                <li className="list-group" key={index}>
                                    <h3 className="fixed">{item.title}</h3>
                                    <ul className="">
                                        {
                                            item.items.map((group,inx)=>(
                                                <li className="list-group-item" key={inx} onClick={this.singerDetail.bind(this,`${match.url}/${group.id}`)}>
                                                    <LazyLoad height={60} placeholder={<img src={require("../../assets/music.png")} alt="music" />}>
                                                        <img src={group.avatar} alt=""/>
                                                    </LazyLoad>
                                                    <p>{group.name}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="list-shortcut">
                        <ul>
                            {
                                this.state.shortcutList.map((item,index)=>(
                                    <li key={index} className={index===this.state.currentIndex?'active':''}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="singer-fixed fixed" >
                        <div className="fixed-title">{this.state.hatHTML}</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Singer);