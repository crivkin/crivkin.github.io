import React, { Component } from 'react';
import { TopBar } from '../components';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config.js';
import { mapStateToPropsLang } from '../redux/actions';
import { 
	LEGAL_RESOURCES,
	GENERAL_RESOURCES
} from '../content/resources';
import { LinkCard } from '../components';

const PAGE_COPY = LANGUAGES['resources_pages'];
const RESOURCE_CARD_CLASS = 'resourceCardClass';

const contentStyle = {
	display: 'inline-block',
	textAlign: 'left',
	width: '80%'
};

/*
	TODO (NOW):
	- CHANGE THE BOTTOM TEXT
	- FIX HEIGHT
	- USE SAMPLES THAT ARE ACTUAL DOCUMENTS

	TODO (LATER):
	- DEAL WITH LANGUAGE SUPPORT
	- HANDLE SCROLL
	- HANDLE COLORING (GROUP BY TYPE?)
	- CHANGE TITLE FROM H3 TO SOMETHING ELSE?
	-- OR JUST MAKE SMALLER?

*/

const categoryColors = {
	'Legal': {
		background: 'hsl(0, 50%, 50%)',
		color: 'hsl(0, 50%, 100%)'
	},
	'General': {
		background: 'hsl(25, 50%, 50%)',
		color: 'hsl(25, 50%, 100%)'
	}
}

class ResourceGroup extends Component {
	render() {
		// TODO: UGH REACT NEEDS THESE TO HAVE KEYS I GUESS . . .
		return (
			<div className='resourceGroup'>
				<h3>{this.props.category}</h3>
				{
					this.props.content.map((doc) => {
						return (
							<LinkCard
		                      path={doc['link']}
		                      background={categoryColors[this.props.category]['background']}
		                      color={categoryColors[this.props.category]['color']}
		                      cardClass={RESOURCE_CARD_CLASS}
		                      title={doc['title']}
		                      description={doc['description']}
		                      internal={false}
		                    />
						);
					})
				}
			</div>
		);
	}
}

class ResourcesPage extends Component {
  render() {
    return (
      <div className="ResourcesPage">
      	<TopBar />
      	<h2>Resources</h2>
      	<div className='resources-content' style={contentStyle}>
      		<ResourceGroup
      			category='General'
      			content={GENERAL_RESOURCES}
      		/>
      		<ResourceGroup
      			category='Legal'
      			content={LEGAL_RESOURCES}
      		/>
      	</div>
      </div>
    );
  }
}

export default connect(mapStateToPropsLang)(ResourcesPage);
