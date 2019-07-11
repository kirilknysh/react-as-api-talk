import React from 'react';
import { compose } from 'redux';
import { withServices } from 'fusion-react';
import { LoggerToken } from 'fusion-tokens';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';

import HomeRouter from './HomeRouter.js';
import HomePresenter from './HomePresenter.js';

function HomeContainer(props) {
	props.logger.info('Welcome to Home Container');
	setInterval(() => {
		props.logger.info(`--- ${new Date()}`);
	}, 2000);

	return <HomeRouter
		{...props}
		renderPresenter={({ match, location }) => {
			return <HomePresenter match={match} location={location} />;
		}}
	/>;
}

export default compose(
	withPageNotFound,
	withServices({ logger: LoggerToken })
)(HomeContainer);
