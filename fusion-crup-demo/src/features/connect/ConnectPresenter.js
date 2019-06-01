import React from "react";
import { styled } from "fusion-plugin-styletron-react";

import { Center } from '../../common/layout.js';

const Header = styled('div', {
	fontSize: '3rem',
});

export default function ConnectPresenter() {
	return (
		<Center>
			<Header>Connect</Header>
		</Center>
	);
}
