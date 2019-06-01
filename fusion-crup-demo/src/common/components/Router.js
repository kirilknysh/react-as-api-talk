import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";

import { resolvePath } from '../utils.js';

export default function Router(props) {
	return (
		<Switch>
			{props.renderChildRoutes && props.renderChildRoutes()}
			{props.renderPresenter && (
				<Route
					path={resolvePath(props.match.path, './')}
					exact
					render={props.renderPresenter}
				/>
			)}
			{props.renderPageNotFound && <Route render={props.renderPageNotFound} />}
		</Switch>
	);
}
