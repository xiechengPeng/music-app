import React from 'react';
import './m-header.css'

class mHeader extends React.Component{
    public state={

    };

    render(){
        return(
            <div className="header">
                <img src={require('./logo.jpg')} alt=""/>
                <span className="txt">QQ音乐</span>
            </div>
        )
    }
}

export default mHeader;