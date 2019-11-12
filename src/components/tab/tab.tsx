import React from 'react';
import { Link } from 'react-router-dom';
import './tab.css';
// interface NavItem{
//     navs:string
// }

interface listTab{
    title:string,
    id:number,
    url:string,
    status:boolean
}

let Tabs:Array<listTab>;
Tabs=[
    {title:'推荐',id:1,url:'/recommend',status:false},
    {title:'歌手',id:2,url:'/singer',status:false},
    {title:'排行',id:3,url:'/rank',status:false},
    {title:'搜索',id:4,url:'/search',status:false},
]

interface NavItem{
    navList:Array<listTab>;
}

class tab extends React.Component<any,NavItem>{
    constructor(props:any){
        super(props);
        this.state={
            navList:Tabs
        }
    }
    async linkTab(id:number){
        for(let i in Tabs){
            if(Tabs[i].id===id){
                Tabs[i].status=true;
            }else{
                Tabs[i].status=false;
            }
        }
    }
    //在组件挂载到DOM前调用
    componentWillMount(){
        let nav=this.props.navs;
        for(let i in Tabs){
            if(Tabs[i].url===nav){
                Tabs[i].status=true;
            }else{
                Tabs[i].status=false;
            }
        }
    }
    //组件挂载到DOM后调用
    // componentDidMount(){

    // }
    render(){
        // const { navs } = this.props;
        return (
            <div className="tab">
                {
                    Tabs.map((item,key)=>(
                        <div className="tab-list" key={key} onClick={()=>this.linkTab(item.id)}>
                            <Link to={item.url} className={item.status?'active':'tab-link'}>{item.title}</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default tab;