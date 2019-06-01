import React from 'react';
import { Route, Switch, withRouter } from 'fusion-plugin-react-router';

import { makeComponentLoader } from './common/utils.js';
import PageNotFound from './common/components/PageNotFound.js';
import Loading from './common/components/Loading.js';
import FullscreenError from './common/components/FullscreenError.js';

import HomeContainer from './features/home/HomeContainer.js';

function root() {
	return (
		<Switch>
			<Route exact path='/' component={HomeContainer} />
			<Route exact path='/loading' component={Loading} />
			<Route exact path='/error' component={FullscreenError} />
			<Route
				path='/connect'
				component={makeComponentLoader({
					load: () => import('./features/connect/ConnectContainer.js'),
				})}
			/>
			<Route component={PageNotFound} />
		</Switch>
	);
}

export default root();
