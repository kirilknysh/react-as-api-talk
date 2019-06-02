import React from 'react';
import { compose } from 'redux';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';
import withExperiments from '../../common/hocs/with-experiments.js'

import ConnectRouter from './ConnectRouter.js';
import ConnectPresenter from './ConnectPresenter.js';
import { getAvailableConnections, connectResolver } from './utils.js';

function ConnectContainer(props) {
	const { experiments, resolver } = props;
	const connections = getAvailableConnections(experiments);

	return <ConnectRouter
		{...props}
		resolver={connectResolver(resolver)}
		connections={connections}
		renderPresenter={({ match, location }) => {
			return <ConnectPresenter
				match={match}
				location={location}
				connections={connections}
			/>;
		}}
	/>;
}

export default compose(
	withPageNotFound,
	withExperiments
)(ConnectContainer);
