import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const topBarStyle = {
	'text-decoration': 'none',
	color: 'black'
}

class TopBar extends Component {
	render() {
		return (
			<div class='TopBar' style={topBarStyle}>
				<h1>
					<Link to='/' style={topBarStyle}>HomeBase</Link>
				</h1>
			</div>
		);
	}
}

export default TopBar;