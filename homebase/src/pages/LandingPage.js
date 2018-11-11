import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { TopBar, LinkCard } from '../components';
import { connect } from 'react-redux';
import { LANGUAGES } from '../config.js';
import { mapStateToPropsLang } from '../redux/actions';

const LANDING_CARD_CLASS = 'landingCardClass';

const PAGE_COPY = LANGUAGES['landing_page'];

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <TopBar />
                <div className='LandingCardContainer'>
                    <LinkCard
                      path={`${this.props.language.lang}/resources`}
                      background='hsl(0, 50%, 50%)'
                      color='hsl(0, 50%, 100%)'
                      cardClass={LANDING_CARD_CLASS}
                      pageName={PAGE_COPY['card_titles']['resources'][this.props.language.lang]}
                    />
                    <LinkCard
                      path={`${this.props.language.lang}/checklist`}
                      background='hsl(185, 50%, 25%)'
                      color='hsl(185, 50%, 100%)'
                      cardClass={LANDING_CARD_CLASS}
                      pageName={PAGE_COPY['card_titles']['checklist'][this.props.language.lang]}
                    />
                    <LinkCard
                      path={`${this.props.language.lang}/transfer`}
                      background='hsl(100, 50%, 50%)'
                      color='hsl(100, 50%, 100%)'
                      cardClass={LANDING_CARD_CLASS}
                      pageName={PAGE_COPY['card_titles']['transfer'][this.props.language.lang]}
                    />
                </div>
            </div>
        );   
    }
}

export default connect(mapStateToPropsLang)(LandingPage);