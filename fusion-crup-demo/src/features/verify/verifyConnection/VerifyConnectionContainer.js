import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { Translate } from 'fusion-plugin-i18n-react';

import withRpc from '../../../common/hocs/with-rpc.js';
import Loading from '../../../common/components/Loading.js';
import FullscreenError from '../../../common/components/FullscreenError.js';
import FullscreenSuccess from '../../../common/components/FullscreenSuccess.js';

function ChooseContainer(props) {
	const { resolver, rpc, connection } = props;
	const [request, setRequest] = useState({ loading: true, result: null, error: null });

	useEffect(() => {
		rpc.request('verify', { connection }).then((result) => {
			setRequest({ loading: false, result });
			resolver.resolve(result);
		}, (error) => {
			setRequest({ loading: false, error });
			resolver.reject(error);
		});
	}, []);

	return (
		<>
		{request.loading && <Loading />}
		{request.result && <FullscreenSuccess message={<Translate id="verification.success" data={{ provider: connection }} />} />}
		{request.error && <FullscreenError message={request.error.message || ''} />}
		</>
	);
}

export default compose(
	withRpc
)(ChooseContainer);
