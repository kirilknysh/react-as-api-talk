import React, { useEffect } from "react";
import { Translate } from 'fusion-plugin-i18n-react';

import Loading from '../../../../common/components/Loading.js';

import { PROVIDER_NAME } from '../utils.js';


export default function LinkContainer(props) {
	const { resolver } = props;

	useEffect(() => {
		const timerId = setTimeout(resolver.resolve, 3000);

		return () => {
			clearTimeout(timerId);
		};
	}, []);

	return (
		<Loading message={<Translate id="connection.progress" data={{ provider: PROVIDER_NAME }} />} />
	);
}
