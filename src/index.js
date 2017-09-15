import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
//import { Router } from 'react-router';
import { Provider } from 'react-redux'; //react 绑定库 Provider组件用于让所有容器组件都可以访问store，而不必显示地传递它，只需要在渲染根组件时使用即可
//import { BrowserRouter, Link, Route } from 'react-router-dom';
import {BrowserRouter as Router,Route,Link,hashHistory} from 'react-router-dom'
import App from './App';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(reducers)






// dcoument.documentElement.style.fontSize = window.innerWidth * 100 / 750 + 'px';//新增
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
  

registerServiceWorker();
