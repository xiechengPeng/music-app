import React from 'react';

class progress extends React.Component{
    render(){
        return (
            <div className="progress-bar">
                <div className="progress-load pro"></div>
                <div className="progress pro"></div>
                <div className="progress-button pro"></div>
            </div>
        )
    }
}
export default progress;