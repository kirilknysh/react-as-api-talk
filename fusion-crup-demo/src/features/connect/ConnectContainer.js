import React from 'react';
import { compose } from 'redux';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';

import ConnectRouter from './ConnectRouter.js';
import ConnectPresenter from './ConnectPresenter.js';

function ConnectContainer(props) {
	return <ConnectRouter
		{...props}
		renderPresenter={({ match }) => {
			return <ConnectPresenter match={match} />;
		}}
	/>;
}

export default compose(withPageNotFound)(ConnectContainer);
