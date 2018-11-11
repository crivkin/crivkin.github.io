import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config.js';
import { mapStateToPropsLang } from '../redux/actions';

const topBarStyle = {
	position: 'relative'
}

const linkStyle = {
	textDecoration: 'none',
	color: 'black'
}

const titleStyle = {
	textAlign: 'center'
}

const langStyle = {
	position: 'absolute',
	right: '15%',
	top: '45%'
}

class TopBar extends Component {
	render() {
		return (
			<div className='TopBar' style={topBarStyle}>
				<h1 style={titleStyle}>
					<Link to='/' style={linkStyle}>HomeBase</Link>
				</h1>
				<span style={langStyle}>change language</span>
			</div>
		);
	}
}

export default connect(mapStateToPropsLang)(TopBar);