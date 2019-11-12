import React from 'react';
import { ReactHTML } from 'react';
import './App.css';
import MHeader from './components/m-header/m-header';
import Tab from './components/tab/tab';
// import axios from 'axios';
import {getDiscList} from './api/recommend';
interface ILocation {
    pathname: string
}

interface IProps {
    children: ReactHTML,
    location: ILocation
}

class App extends React.Component<IProps> {
    async proxyRequest() {
        getDiscList().then((res)=>{
        })
    }
    // componentWillMount(){
    // }
    public render(){
        const {location,children}=this.props;
        return (
            <div className="App">
                <div className="top">
                    <MHeader></MHeader>
                    <Tab navs={location.pathname}></Tab>
                </div>
                <div className="data-list">
                    {children}
                </div>
            </div>
        )
    }
}

export default App;