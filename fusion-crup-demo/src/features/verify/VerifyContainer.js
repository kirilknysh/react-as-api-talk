import React from 'react';
import { compose } from 'redux';
import { Route, Redirect } from 'fusion-plugin-react-router';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';
import Router from '../../common/components/Router.js';
import { resolvePath } from '../../common/utils.js';
import connections from '../connections.js';

import { chooseResolver, verifyConnectionResolver } from './utils.js';
import ChooseContainer from './choose/ChooseContainer.js';
import VerifyConnectionContainer from './verifyConnection/VerifyConnectionContainer.js';

function VerifyContainer(props) {
	const { resolver, history } = props;

	return <Router
		{...props}
		renderChildRoutes={() => {
			return [
				<Route
					key={'choose'}
					path={resolvePath(props.match.path, './choose')}
					render={(routeProps) => {
						return <ChooseContainer {...routeProps} connections={connections} resolver={chooseResolver(resolver, history)} />;
					}}
				/>,
				<Route
					key={'choosen'}
					path={resolvePath(props.match.path, './:connection')}
					render={({ match }) => {
						return <VerifyConnectionContainer connection={match.params.connection} resolver={verifyConnectionResolver(resolver)} />;
					}}
				/>,
			];
		}}
		renderPresenter={({ history }) => {
			const location = Object.assign({}, history.location, {
				pathname: resolvePath(history.location.pathname, './choose'),
				state: null,
			});

			return <Redirect to={location} />;
		}}
	/>;
}

export default compose(
	withPageNotFound
)(VerifyContainer);
