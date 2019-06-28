import React from 'react';
import { styled } from 'fusion-plugin-styletron-react';
import { Translate } from 'fusion-plugin-i18n-react';

import { Center, StylishButton } from '../../../../common/layout.js';

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
const ButtonsContainer = styled('div', {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-evenly',
	fontSize: '2rem',
});

export default function ConfirmationContainer(props) {
	const { resolver, connection } = props;

	return (
		<Center>
			<Container>
				<Header><Translate id="connection.header" data={{ provider: connection.text }} /></Header>
				<ButtonsContainer>
					<StylishButton onClick={resolver.resolve}><Translate id="action.confirm" /></StylishButton>
					<StylishButton onClick={resolver.reject}><Translate id="action.cancel" /></StylishButton>
				</ButtonsContainer>
			</Container>
		</Center>
	);
}
