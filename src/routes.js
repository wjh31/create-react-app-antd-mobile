import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import ProductList from './components/product/ProductList';

export default
<Route path='/' component={App} >
    <IndexRoute component={App}/> {/*默认首页跳到某个组件*/}
    <Route path="/productList" component={ProductList} />
    {/* <Route path="playlist/detail/:playlist_id" component={PlaylistDetailPage} /> */}
    
</Route>