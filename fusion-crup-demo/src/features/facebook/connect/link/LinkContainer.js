import React, { useEffect } from "react";

import Loading from '../../../../common/components/Loading.js';

export default function LinkContainer(props) {
	const { resolver } = props;

	useEffect(() => {
		const timerId = setTimeout(resolver.resolve, 3000);

		return () => {
			clearTimeout(timerId);
		};
	}, []);

	return (
		<Loading message={'Connecting Facebook...'} />
	);
}
