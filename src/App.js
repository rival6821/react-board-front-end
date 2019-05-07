import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from 'components/Header';
import List from 'components/List';
import Login from 'components/Login';

import 'styles/common.scss';

function App() {
  return (
    <div className={'App'}>
      <Router>
        <div>
        <Header/>
        <Route path="/" exact component={List} />
        <Route path="/login/" component={Login} />
        </div>
      </Router>
    </div>  
  );
}

export default App;
