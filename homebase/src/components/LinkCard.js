import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const graphicStyle = {
	padding: '12px',
	borderBottom: '1px solid',
	fontSize: '24px'
}

const descriptionStyle = {
	padding: '24px',
	borderBottom: '1px solid',
	borderColor: '#CCCCCC'
}

const linkStyle = {
	padding: '24px',
}

const linkTextStyle = {
	textDecoration: 'none',
	color: '#333333'
}

// link card with three sections
// 1: graphic
// 2: description
// 3: link

class LinkCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			graphicStyle: {
				...graphicStyle,
				background: this.props.background,
				color: this.props.color
			}, 
			linkStyle: {
				...linkStyle
			},
			descriptionStyle: {
				...descriptionStyle
			}
		}
	}

	render() {
		return (
			<div className={`LinkCard ${this.props.cardClass}`}>
				<div className='cardGraphic' style={this.state.graphicStyle}>
					<h3>{this.props.pageName}</h3>
				</div>
				<div className='cardDescription' style={this.state.descriptionStyle}>
					<p>Description</p>
				</div>
				<Link to={this.props.path} style={linkTextStyle}>
					<div className='cardLink' style={this.state.linkStyle}>
						{this.props.pageName}
					</div>
				</Link>
			</div>
		);
	}
}

export default LinkCard;
