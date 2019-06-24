import React from 'react';
import { compose } from 'redux';
import { styled } from 'fusion-plugin-styletron-react';
import { withTranslations } from 'fusion-plugin-i18n-react';

import { Center, StylishLinkLike } from '../../../common/layout.js';

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

function generateLinks(connections, resolver) {
	return connections.map((connection) => {
		return <StylishLinkLike key={connection.name} onClick={() => resolver.resolve(connection)}>{connection.text}</StylishLinkLike>;
	});
}

function ChooseContainer(props) {
	const { translate, connections, resolver } = props;

	return (
		<Center>
			<Container>
				<Header>{translate('page.header.verify')}</Header>
				<LinksContainer>
					{generateLinks(connections, resolver)}
				</LinksContainer>
			</Container>
		</Center>
	);
}

export default compose(
	withTranslations(['page.header.verify']),
)(ChooseContainer);
