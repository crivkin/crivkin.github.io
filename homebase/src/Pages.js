import React, { Component } from 'react';
import { Route } from "react-router-dom";
import {
  LandingPage,
  ResourcesPage,
  TransferPage,
  CheckListPage
} from './pages/index';
import { connect } from 'react-redux';
import { LANGUAGES } from './config.js';
import {
  mapStateToPropsLang,
  UPDATE_LANGUAGE

} from './redux/actions';

// TODO: change lang to 

class Pages extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    // if languages are different
    if (this.props.language.lang !== this.props.match.params.lang) {
      // dispatch an action to change language
      this.props.dispatch({type: UPDATE_LANGUAGE, lang: this.props.match.params.lang});
      console.log('cambiado');
    }
  }

  render() {
    return (
      <div className='pages'>
        <Route exact path={`${this.props.match.url}/`}
          component={LandingPage}
        />
        <Route path={`${this.props.match.url}/resources`}
          component={ResourcesPage}
        />
        <Route path={`${this.props.match.url}/transfer`}
          component={TransferPage}
        />
        <Route path={`${this.props.match.url}/checklist`}
          component={CheckListPage}
        />
      </div>
    );
  }
}

export default connect(mapStateToPropsLang)(Pages);
