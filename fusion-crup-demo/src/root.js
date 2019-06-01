import React from 'react';
import { Route, Switch, withRouter } from 'fusion-plugin-react-router';

import HomeContainer from './features/home/HomeContainer.js';
import PageNotFound from './common/components/PageNotFound.js';

function root() {
	return (
		<Switch>
			<Route exact path='/' component={HomeContainer} />
			<Route component={PageNotFound} />
		</Switch>
	);
}

export default root();
