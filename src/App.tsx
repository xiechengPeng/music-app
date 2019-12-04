import React from 'react';
import './App.css';
import MHeader from './components/m-header/m-header';
import Tab from './components/tab/tab';
import MusicPlayer from './pages/play/musicPlayer';
import {BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import router from './router/router';
import { renderRoutes } from "react-router-config";
interface ILocation {
    pathname: string
}
interface IMatch{
    path:string
}
interface IProps {
    children: any,
    location: ILocation,
    match:IMatch
    // history:any
}
interface Stre{
    nav:any
}
class App extends React.Component{
    public render(){
        return (
            <Router>
            <div className="App">
                <div className="top">
                    <MHeader></MHeader>
                    <Tab></Tab>
                </div>
                <div className="data-list">
                    <Switch>
                        <Redirect from="/" to="/recommend" exact />
                        { renderRoutes(router) }
                    </Switch>
                </div>
                <MusicPlayer />
            </div>
            </Router>
        )
    }
}

export default App;