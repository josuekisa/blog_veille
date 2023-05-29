import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Page1 from './pages/page1/index'
import Page2 from './pages/page2/index'
import Page3 from './pages/page3/index'
const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
