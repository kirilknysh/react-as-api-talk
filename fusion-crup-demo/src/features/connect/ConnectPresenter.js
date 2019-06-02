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

function generateLinks(connections, path, search) {
	return connections.map((connection) => {
		return <StylishLink to={{ pathname: resolvePath(path, connection.route), search }} key={connection.name}>{connection.text}</StylishLink>;
	});
}

export default function ConnectPresenter(props) {
	const { match, location, connections } = props;

	return (
		<Center>
			<Container>
				<Header>Connect</Header>
				<LinksContainer>
					{generateLinks(connections, match.url, location.search)}
				</LinksContainer>
			</Container>
		</Center>
	);
}
