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
console.log(process,'asf')

class App extends React.Component<IProps> {
    async proxyRequest() {
        getDiscList().then((res)=>{
            console.log(res,'///')
        })
		// axios({
		// 	method: 'get',
		// 	url: "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg"
		// }).then((resp) => {
		// 	console.log(resp);
		// }, (err) => {
		// 	console.log(err);
        // });
    }
    componentWillMount(){
        this.proxyRequest();
    }
    public render(){
        const {location,children}=this.props;
        console.log(location,'/')
        return (
            <div className="App">
                <MHeader></MHeader>
                <Tab navs={location.pathname}></Tab>
                <div className="data-list">
                    {children}
                </div>
            </div>
        )
    }
}

export default App;