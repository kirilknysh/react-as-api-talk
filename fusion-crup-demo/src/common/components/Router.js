import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";

export default function Router(props) {
	return (
		<Switch>
			{props.renderChildRoutes && props.renderChildRoutes()}
			{props.renderPresenter && (
				<Route
					path={props.match.path}
					exact
					strict
					render={props.renderPresenter}
				/>
			)}
			{props.renderNotFound && <Route render={props.renderNotFound} />}
		</Switch>
	);
}
