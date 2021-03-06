import React from 'react';
import { styled } from 'fusion-plugin-styletron-react';

import { resolvePath } from '../../common/utils.js';
import { Center, StylishLink } from '../../common/layout.js';
import InlineError, { SIZE } from '../../common/components/InlineError.js';

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
const ErrorContainer = styled('div', {
	padding: '0 30vw',
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

function renderConnections(match, location, translate, connections) {
	if (connections.length === 0) {
		return (
			<ErrorContainer>
				<InlineError message={translate('connection.fail.no_connections')} size={SIZE.normal} />
			</ErrorContainer>
		);
	}

	return (
		<LinksContainer>
			{generateLinks(connections, match.url, location.search)}
		</LinksContainer>
	);
}

export default function ConnectPresenter(props) {
	const { match, location, translate, connections } = props;

	return (
		<Center>
			<Container>
				<Header>{translate('page.header.connect')}</Header>
				{renderConnections(match, location, translate, connections)}
			</Container>
		</Center>
	);
}
