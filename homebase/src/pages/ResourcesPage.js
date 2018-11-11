import React, { Component } from 'react';
import { TopBar } from '../components';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config.js';
import { mapStateToPropsLang } from '../redux/actions';

const PAGE_COPY = LANGUAGES['resources_pages'];

class ResourcesPage extends Component {
  render() {
    return (
      <div className="ResourcesPage">
      	<TopBar />
        <p>This is the Resources Page</p>
      </div>
    );
  }
}

export default connect(mapStateToPropsLang)(ResourcesPage);
