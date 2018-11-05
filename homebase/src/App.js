import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {
  LandingPage,
  ResourcesPage,
  TransferPage,
  CheckListPage
} from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className='router'>
            <Route exact path='/' component={LandingPage} />
            <Route path='/resources' component={ResourcesPage} />
            <Route path='/transfer' component={TransferPage} />
            <Route path='/checklist' component={CheckListPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
