import React from 'react';

import Header from 'components/Header';
import List from 'components/List';

import 'styles/common.scss';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <Header/>
      <List/>
    </div>
  );
}

export default App;
