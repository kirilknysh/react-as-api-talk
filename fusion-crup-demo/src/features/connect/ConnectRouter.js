import React from 'react';
import { Route } from 'fusion-plugin-react-router';

import { resolvePath, identity } from '../../common/utils.js';
import Router from '../../common/components/Router.js';

function generateRoute(path, resolver, connection) {
	return <Route
		key={connection.name}
		path={resolvePath(path, connection.route)}
		render={(props) => {
			return <connection.Connect {...props} resolver={resolver} connection={connection} />;
		}}
	/>;
}

function renderChildRoutes(path, resolver, connections) {
	return connections.map((connection) => {
		if (!connection.Connect) {
			return null;
		}

		return generateRoute(path, resolver, connection);
	}).filter(identity);
}

export default function ConnectRouter(props) {
	const { match, connections, resolver } = props;

	return <Router
		{...props}
		renderChildRoutes={renderChildRoutes.bind(null, match.path, resolver, connections)}
	/>;
}
