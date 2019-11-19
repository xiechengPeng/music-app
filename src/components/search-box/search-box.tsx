import React from 'react';
import './search-box.css';

class searchBox extends React.Component{
    public state={

    }
    render(){
        return (
            <div className="search-box">
                <input type="search" placeholder="搜索歌曲、歌手"/>
            </div>
        )
    }
}

export default searchBox;