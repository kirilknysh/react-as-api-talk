import React from 'react';
import { compose } from 'redux';
import {withTranslations} from 'fusion-plugin-i18n-react';

import withPageNotFound from '../../common/hocs/with-page-not-found.js';
import connections from '../connections.js';

import VerifyRouter from './VerifyRouter.js';
import VerifyPresenter from './VerifyPresenter.js';

function VerifyContainer(props) {
	const { translate } = props;

	return <VerifyRouter
		{...props}
		connections={connections}
		renderPresenter={({ match }) => {
			return <VerifyPresenter match={match} translate={translate} connections={connections} />;
		}}
	/>;
}

export default compose(
	withTranslations(['page.header.verify']),
	withPageNotFound
)(VerifyContainer);
