import React from 'react';
import { compose } from 'redux';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';
import withExperiments from '../../common/hocs/with-experiments.js'

import ConnectRouter from './ConnectRouter.js';
import ConnectPresenter from './ConnectPresenter.js';
import { getAvailableConnections } from './utils.js';

function ConnectContainer(props) {
	const connections = getAvailableConnections(props.experiments);

	return <ConnectRouter
		{...props}
		connections={connections}
		renderPresenter={({ match }) => {
			return <ConnectPresenter
				match={match}
				connections={connections}
			/>;
		}}
	/>;
}

export default compose(
	withPageNotFound,
	withExperiments
)(ConnectContainer);
