import React from 'react';
import { compose } from 'redux';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';
import connections from '../connections.js';

import VerifyRouter from './VerifyRouter.js';
import VerifyPresenter from './VerifyPresenter.js';

function VerifyContainer(props) {
	return <VerifyRouter
		{...props}
		connections={connections}
		renderPresenter={({ match }) => {
			return <VerifyPresenter match={match} connections={connections} />;
		}}
	/>;
}

export default compose(
	withPageNotFound,
)(VerifyContainer);
