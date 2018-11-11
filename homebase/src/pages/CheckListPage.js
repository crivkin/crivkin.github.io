import React, { Component } from 'react';
import { TopBar } from '../components';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config.js';
import { mapStateToPropsLang } from '../redux/actions';

const PAGE_COPY = LANGUAGES['checklist_page'];

class CheckListPage extends Component {
  render() {
    return (
      <div className="CheckListPage">
      	<TopBar />
        <p>This is the CheckList Page</p>
      </div>
    );
  }
}

export default connect(mapStateToPropsLang)(CheckListPage);
