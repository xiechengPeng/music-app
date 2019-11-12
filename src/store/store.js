/**
 *  引入 createStore方法 从redux ,用于创建 store 
 *  createStore()方法接收第一个参数是reducer
 **/

import { createStore, applyMiddleware } from 'redux'

// 引入异步组件
// import thunk from 'redux-thunk'

// 引入reducer,因为当前只有一个函数,先采用解构方法引入

import rootReducer from '../reducers/index';

// 将 reducer作为参数 传入 createStore()方法
const store = createStore(rootReducer);

export default store