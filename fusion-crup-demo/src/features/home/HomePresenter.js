import React from "react";
import { styled } from "fusion-plugin-styletron-react";

import { Center, StylishLink } from '../../common/layout.js';

const Container = styled('div', {
	width: '100%',
	height: '50vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
});
const Header = styled('div', {
	width: '100%',
	fontSize: '3rem',
	textAlign: 'center',
});
const LinksContainer = styled('div', {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-evenly',
});

export default function HomePresenter(props) {
	const { match } = props;

	return (
		<Center>
			<Container>
				<Header>Home</Header>
				<LinksContainer>
					<StylishLink to={`${match.url}loading`}>loading</StylishLink>
					<StylishLink to={`${match.url}error`}>error</StylishLink>
					<StylishLink to={`${match.url}not-found`}>not found</StylishLink>
					<StylishLink to={`${match.url}connect`}>connect</StylishLink>
				</LinksContainer>
			</Container>
		</Center>
	);
}
