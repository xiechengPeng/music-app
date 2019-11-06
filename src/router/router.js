import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom';
import App from '../App';

import Rank from '../pages/rank/rank';
import Recommend from '../pages/recommend/recommend';
import Search from '../pages/search/search';
import Singer from '../pages/singer/singer';

const Rout=[
    {path:'/',component:Recommend},
    {path:'/recommend',component:Recommend},
    {path:'/rank',component:Rank},
    {path:'/search',component:Search},
    {path:'/singer',component:Singer},
]

const Root = () =>(
    <Switch>
        <App>
            {
                
                Rout.map((item,key)=>(
                    <Route key={key} exact={true} path={item.path} component={item.component}  />
                ))
            }
        </App>
    </Switch>
)
export default withRouter(Root);