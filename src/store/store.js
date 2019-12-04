/**
 *  引入 createStore方法 从redux ,用于创建 store 
 *  createStore()方法接收第一个参数是reducer
 **/

import { createStore, applyMiddleware } from 'redux'
import logger from "redux-logger"

// 引入异步组件
// import thunk from 'redux-thunk'

// 引入reducer,因为当前只有一个函数,先采用解构方法引入

import rootReducer from '../reducers/reducers';
import storageMiddleware from '../reducers/storageMiddleware';
// 中间件，作用：如果不使用该中间件，当我们dispatch一个action时，需要给dispatch函数传入action对象；但如果我们使用了这个中间件，那么就可以传入一个函数，这个函数接收两个参数:dispatch和getState。这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用
// import thunk from 'redux-thunk';

let useMiddleware = applyMiddleware(storageMiddleware) // 使用中间件

if (process.env.NODE_ENV === "development") {
    // 开发环境使用redux-logger
    useMiddleware = applyMiddleware(storageMiddleware, logger);
}

// 将 reducer作为参数 传入 createStore()方法
const store = createStore(
    rootReducer,
    useMiddleware
    // applyMiddleware(thunk)
);

export default store;