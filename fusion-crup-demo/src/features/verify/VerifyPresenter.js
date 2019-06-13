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

function generateLinks(connections, path) {
	return connections.map((connection) => {
		return <StylishLink to={{ pathname: resolvePath(path, connection.route) }} key={connection.name}>{connection.text}</StylishLink>;
	});
}

export default function VerifyPresenter(props) {
	const { match, translate, connections } = props;

	return (
		<Center>
			<Container>
				<Header>{translate('page.header.verify')}</Header>
				<LinksContainer>
					{generateLinks(connections, match.url)}
				</LinksContainer>
			</Container>
		</Center>
	);
}
