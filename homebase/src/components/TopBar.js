import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config.js';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import {
  mapStateToPropsLang,
  UPDATE_LANGUAGE

} from '../redux/actions';

const PAGE_COPY = LANGUAGES['topBar'];

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
				<span style={langStyle}>
					<img
						src={`/assets/flags/${this.props.language.lang}.gif`}
						alt={`${this.props.language.name} Flag`}
					/>
					&nbsp; &nbsp;
					<DropdownButton
						title={PAGE_COPY['dropdown_title'][this.props.language.lang]}
						id='languageDropdown'
					>
						<MenuItem
							onSelect={() => {
								this.props.dispatch({type: UPDATE_LANGUAGE, lang: 'en'});
							}}
						>
							<img src='/assets/flags/en.gif' alt='American Flag'/>
							&nbsp; {PAGE_COPY['languages']['en'][this.props.language.lang]}
						</MenuItem>
						<MenuItem
							onSelect={() => {
								this.props.dispatch({type: UPDATE_LANGUAGE, lang: 'es'});
							}}
						>
							<img src='/assets/flags/es.gif' alt='Mexican Flag'/>
							&nbsp; {PAGE_COPY['languages']['es'][this.props.language.lang]}
						</MenuItem>
					</DropdownButton>
				</span>
			</div>
		);
	}
}

export default connect(mapStateToPropsLang)(TopBar);