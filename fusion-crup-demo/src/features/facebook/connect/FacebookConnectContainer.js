import React, { useState } from 'react';
import { compose } from 'redux';

import withPageNotFound from '../../../common/hocs/with-page-not-found.js';
import Router from '../../../common/components/Router.js';

import LinkContainer from '../../link/LinkContainer.js';
import ConfirmationContainer from './confirmation/ConfirmationContainer.js';
import FinalizeContainer from './finalize/FinalizeContainer.js';
import { confirmationResolver, linkResolver, finalizeResolver } from './utils.js';

function FacebookConnectContainer(props) {
	const { resolver, connection } = props;
	const [step, setStep] = useState({ name: 'confirmation', payload: null });

	return <Router
		{...props}
		renderPresenter={() => {
			switch (step.name) {
				case 'confirmation':
					return <ConfirmationContainer resolver={confirmationResolver(resolver, setStep)} connection={connection} />;
				case 'link':
					return <LinkContainer resolver={linkResolver(resolver, setStep)} connection={connection} />;
				case 'finalize':
					return <FinalizeContainer resolver={finalizeResolver(resolver)} connection={connection} />;
				default:
					return props.renderPageNotFound();
			}
		}}
	/>;
}

export default compose(
	withPageNotFound
)(FacebookConnectContainer);
