import React, { useState } from 'react';
import { compose } from 'redux';

import withPageNotFound from '../../../common/hocs/with-page-not-found.js';
import Router from "../../../common/components/Router.js";

import LinkContainer from '../../link/LinkContainer.js';
import FinalizeContainer from './finalize/FinalizeContainer.js';
import { linkResolver, finalizeResolver } from './utils.js';

function GithubConnectContainer(props) {
	const { resolver, connection } = props;
	const [step, setStep] = useState({ name: 'link', payload: null });

	return <Router
		{...props}
		renderPresenter={() => {
			switch (step.name) {
				case 'link':
					return <LinkContainer resolver={linkResolver(resolver, setStep)} connection={connection} />;
				case 'finalize':
					return <FinalizeContainer resolver={finalizeResolver(resolver)} connection={connection} result={step.payload} />;
				default:
					return props.renderPageNotFound();
			}
		}}
	/>;
}

export default compose(
	withPageNotFound
)(GithubConnectContainer);
