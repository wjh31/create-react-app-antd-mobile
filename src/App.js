import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ErrorPage from './containers/ErrorPage';
// import Home from '../containers/Home';
// import User from '../containers/User';
// import Search from '../containers/Search';
// import Detail from '../containers/Detail';
// import City from '../containers/City';



import ProductList from './components/product/ProductList';

import {Icon} from 'antd-mobile';
import logo from './logo.svg';
//import './App.css';

class App extends Component{
  constructor(props, context){
    super(props, context);
  }
  render(){
    return (
      <Router>
        <div>
          {/**
           * 这里可以公共的样式,比如 头部, 尾部, 等.
           */}
           header
          {/*结合Switch组件可以匹配到都匹配不到的路劲,404等...*/}
          <Switch>
            <Route path='/' exact component={ProductList}/>
            <Route path='/list' exact component={ProductList}/>
            {/* <Route path='/user'  component={User}/>
            <Route path='/search'  component={Search}/>
            <Route path='/detail'  component={Detail}/>
            <Route path='/city'  component={City}/>*/}
            <Route component={ErrorPage}/>}
          </Switch>
          footer
        </div>
      </Router>
    );
  }
}

export default App;
