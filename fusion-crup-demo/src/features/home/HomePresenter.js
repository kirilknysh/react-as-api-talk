import React from "react";
import { styled } from "fusion-plugin-styletron-react";

import { Center } from '../../common/layout.js';

const Header = styled('div', {
	fontSize: '3rem',
});

export default function HomePresenter() {
	return (
		<Center>
			<Header>Home</Header>
		</Center>
	);
}
