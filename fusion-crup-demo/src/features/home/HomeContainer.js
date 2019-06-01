import React from 'react';
import { compose } from 'redux';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';

import HomeRouter from './HomeRouter.js';
import HomePresenter from './HomePresenter.js';

function HomeContainer(props) {
	return <HomeRouter
		{...props}
		renderPresenter={({ match }) => {
			return <HomePresenter match={match} />;
		}}
	/>;
}

export default compose(withPageNotFound)(HomeContainer);
