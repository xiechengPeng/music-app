import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from "./App"
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './store/store';
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();

//创建store
// const store = createStore(
//     rootReducer,
//     // applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(sagas)

ReactDOM.render(
    // <BrowserRouter>
        <Provider store={Store}>
            <App />
        </Provider>,
    // </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
