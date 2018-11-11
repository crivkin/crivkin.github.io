// define & export actions

export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

// define & export functions

export const updateLanguage = (lang) => {
	return { type: UPDATE_LANGUAGE, lang };
}

export const mapStateToPropsLang = state => ({
  language: state.language
});
