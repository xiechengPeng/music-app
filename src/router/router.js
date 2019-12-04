import React ,{ lazy, Suspense } from 'react'
// import {Router,Route, Switch, withRouter,Redirect} from 'react-router-dom';
// import App from '../App';
// import { renderRoutes } from "react-router-config";
// import Rank from '../pages/rank/rank';
// import Recommend from '../pages/recommend/recommend';
// import Search from '../pages/search/search';
// import Singer from '../pages/singer/singer';
// import Disc from '../pages/disc/disc';

const withSuspense = (Component) => {
    return (props) => (
        <Suspense fallback={null}>
            <Component {...props} />
        </Suspense>
    );
}
const Recommend = withSuspense(lazy(() => import("../pages/recommend/recommend")));
const Rank = withSuspense(lazy(() => import("../pages/rank/rank")));
const Search = withSuspense(lazy(() => import("../pages/search/search")));
const Singer = withSuspense(lazy(() => import("../pages/singer/singer")));

const Disc = withSuspense(lazy(() => import("../containers/disc")));
const RankItem = withSuspense(lazy(() => import("../containers/rankItem")));
const SingerDetail = withSuspense(lazy(() => import("../pages/singer-detail/singer-detail")));

const router = [
    {
        path: "/recommend",
        component: Recommend,
        routes: [
        {
            path: "/recommend/:id",
            component: Disc
        }
        ]
    },
    {
        path: "/rank",
        component: Rank,
        routes: [
            {
                path: "/rank/:id",
                component: RankItem
            }
        ]
    },
    {
        path: "/singer",
        component: Singer,
        routes: [
            {
                path: "/singer/:id",
                component: SingerDetail
            }
        ]
    },
    {
        path: "/search",
        component: Search,
        // routes: [
        //     {
        //         path: "/search/album/:id",
        //         component: Album
        //     },
        //     {
        //         path: "/search/singer/:id",
        //         component: Singer
        //     }
        // ]
    },
    {
        component: () => (
            <div style={{marginTop: 100, textAlign: "center"}}>
                请求的页面不存在
            </div>
        )
    }
]
/* exact能够使得路由的匹配更严格一些
 * true是表示严格匹配， 为false时为正常匹配
 * 如在exact为true时，’/link’与’/’是不匹配的，但是在false的情况下它们又是匹配的
 */
// const Root = () =>(
//     <Switch>
//         <App>
//             {/* <Redirect from="/" to="/recommend" exact /> */}
//             {/* {renderRoutes(Rout)} */}
//             {
                
//                 myRoute.map((item, key) => (
//                     <Route key={key} exact={item.exact} path={item.path} component={item.component}  />
//                 ))
//             }
            
//         </App>
//     </Switch>
// )
// export default withRouter(Root);

export default router;
