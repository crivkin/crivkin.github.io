import React, { Component } from 'react';
import { TopBar } from '../components';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config.js';
import { mapStateToPropsLang } from '../redux/actions';

const PAGE_COPY = LANGUAGES['checklist_page'];

class CheckListPage extends Component {

  render() {
    return (
    	<div>
    	<TopBar/>
    	<h2>Checklist</h2>
        <div><h4><Item message="File Citizenship Form" /></h4></div>
        <div><h4><Item message="Study for Citizenship test" /></h4></div>
        <div><h4><Item message="Complete I9" /></h4></div>
        </div>
    );
  }
}

class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

export default connect(mapStateToPropsLang)(CheckListPage);
