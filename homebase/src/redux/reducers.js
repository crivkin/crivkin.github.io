import { combineReducers } from 'redux';

import {
	UPDATE_LANGUAGE
} from './actions';

const LANG_NAMES = {
	en: 'English',
	es: 'Spanish'
}

// TODO: ADD FLAG PATH MAYBE

const DEFAULT_LANG_STATE = {
	lang: 'en',
	name: 'English'
}

const language = (state = DEFAULT_LANG_STATE, action) => {
	switch(action.type) {
		case UPDATE_LANGUAGE:
			return {
				lang: action.lang,
				name: LANG_NAMES[action.lang]
			}
		default:
			return state;
	}
}

const homeBaseApp = combineReducers({
	language
});

export default homeBaseApp;

