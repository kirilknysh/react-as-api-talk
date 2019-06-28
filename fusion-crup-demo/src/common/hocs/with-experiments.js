import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'fusion-plugin-react-router';

function parseExperiments(location) {
	const urlSearchParams = new URLSearchParams(location.search);
	const xp = urlSearchParams.get('xp');

	if (!xp) {
		return {};
	}

	return xp.split(',').reduce((experiments, key) => {
		return (experiments[key] = true, experiments);
	}, {});
}

function ExperimentsComponent(props) {
	const { render, location } = props;

	return render({ experiments: parseExperiments(location) });
};

const ExperimentsContainer = compose(withRouter)(ExperimentsComponent);

export default function withExperiments(Component) {
	return function WithExperiments(props) {
		return <ExperimentsContainer
			render={renderProps => <Component {...props} {...renderProps} />}
		/>;
	};
}
