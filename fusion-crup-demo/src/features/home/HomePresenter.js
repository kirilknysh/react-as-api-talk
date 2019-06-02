import React from "react";
import { styled } from "fusion-plugin-styletron-react";

import { resolvePath } from '../../common/utils.js';
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
	const { match, location } = props;

	return (
		<Center>
			<Container>
				<Header>Home</Header>
				<LinksContainer>
					<StylishLink to={{ pathname: resolvePath(match.url, './loading'), search: location.search }}>loading</StylishLink>
					<StylishLink to={{ pathname: resolvePath(match.url, './error'), search: location.search }}>error</StylishLink>
					<StylishLink to={{ pathname: resolvePath(match.url, './not-found'), search: location.search }}>not found</StylishLink>
					<StylishLink to={{ pathname: resolvePath(match.url, './connect'), search: location.search }}>connect</StylishLink>
					<StylishLink to={{ pathname: resolvePath(match.url, './verify'), search: location.search }}>verify</StylishLink>
				</LinksContainer>
			</Container>
		</Center>
	);
}
