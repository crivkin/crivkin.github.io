import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Pages from './Pages';
import { mapStateToPropsLang } from './redux/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <div className='router'>
            <Route exact path='/'
              render={() => <Redirect to={`/${this.props.language.lang}`} />}
            />
            <Route path='/:lang' component={Pages} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToPropsLang)(App);
