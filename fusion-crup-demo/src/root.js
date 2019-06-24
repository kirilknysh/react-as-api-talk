import React from 'react';
import { Route, Switch } from 'fusion-plugin-react-router';

import { makeComponentLoader } from './common/utils.js';
import PageNotFound from './common/components/PageNotFound.js';
import Loading from './common/components/Loading.js';
import FullscreenError from './common/components/FullscreenError.js';

import { noopResolver } from './features/resolvers';
import HomeContainer from './features/home/HomeContainer.js';

const ConnectComponentLoader = makeComponentLoader({
	load: () => import('./features/connect/ConnectContainer.js'),
});
const VerifyComponentLoader = makeComponentLoader({
	load: () => import('./features/verify/VerifyContainer.js'),
});

function root() {
	return (
		<Switch>
			<Route exact path='/' component={HomeContainer} />
			<Route exact path='/loading' component={Loading} />
			<Route exact path='/error' component={FullscreenError} />
			<Route
				path='/connect'
				render={(props) => {
					return <ConnectComponentLoader {...props} resolver={noopResolver()} />;
				}}
			/>
			<Route
				path='/verify'
				render={(props) => {
					return <VerifyComponentLoader {...props} />;
				}}
			/>
			<Route component={PageNotFound} />
		</Switch>
	);
}

export default root();
