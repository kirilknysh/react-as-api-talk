import React from "react";
import { compose } from 'redux';
import { Translate } from 'fusion-plugin-i18n-react';

import Loading from '../../common/components/Loading.js';
import withRpc from '../../common/hocs/with-rpc.js';

function LinkContainer(props) {
	const { resolver, rpc, connection } = props;

	rpc.request('connect', { connection: connection.name }).then(() => {
		resolver.notify(`${connection.name} connected`);
		resolver.resolve();
	}, (error) => {
		resolver.notify(`${connection.name} connection error`);
		resolver.reject(error);
	})

	return (
		<Loading message={<Translate id="connection.progress" data={{ provider: connection.text }} />} />
	);
}

export default compose(
	withRpc
)(LinkContainer);
