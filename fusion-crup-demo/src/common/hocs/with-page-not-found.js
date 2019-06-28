import React from 'react';

import PageNotFound from '../components/PageNotFound.js';

function renderPageNotFound() {
	return <PageNotFound />;
}

export default function withPageNotFound(Component) {
	return function WithPageNotFound(props) {
		return <Component renderPageNotFound={renderPageNotFound} {...props} />;
	};
}
