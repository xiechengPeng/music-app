import React from 'react';
import './search.css';
import SearchBox from '../../components/search-box/search-box';
import { getHotSearchList } from '../../api/search';
class Search extends React.Component{
    public state={
        hotlistData:[],
    }
    async _getHotSearchList(){
        getHotSearchList().then(res=>{
            try {
                if(res.code===0){
                    this.setState({
                        hotlistData:res.data.hotkey
                    })
                }
            } catch (error) {
                console.log(error)
            }
        })
    }
    componentDidMount(){
        this._getHotSearchList();

    }
    render(){
        return (
            <div className="search">
                <div className="search-input">
                    <SearchBox></SearchBox>
                </div>
                <div className="search-list">
                    <h3>热门搜索</h3>
                    <ul>
                        {
                            this.state.hotlistData.map((item,index)=>(
                                <li key={index}><span>{item.k}</span></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search;