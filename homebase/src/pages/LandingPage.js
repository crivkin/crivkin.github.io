import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TopBar } from '../components';

const linkStyle = {
	'text-decoration': 'none',
	color: '#333333'
}

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <TopBar />
        <Link to='/resources' style={linkStyle}>link to resources page</Link>
        <br /><br />
        <Link to='/transfer' style={linkStyle}>link to transfer page</Link>
        <br /><br />
        <Link to='/checklist' style={linkStyle}>link to checklist page</Link>
        <br /><br />
      </div>
    );
  }
}

export default LandingPage;