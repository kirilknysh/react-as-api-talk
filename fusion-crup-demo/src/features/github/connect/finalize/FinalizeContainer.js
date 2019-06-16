import React from "react";
import { styled } from "fusion-plugin-styletron-react";
import { Translate } from 'fusion-plugin-i18n-react';

import { Center, StylishButton } from '../../../../common/layout.js';
import InlineError, { SIZE } from '../../../../common/components/InlineError.js';

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
const ErrorContainer = styled('div', {
	padding: '1vh 30vw',
});

function getHeaderContent(connection, error) {
	if (!error) {
		return <Translate id="connection.done.success" data={{ provider: connection.text }} />;
	}

	return (<>
		<Translate id="connection.done.error" data={{ provider: connection.text }} />
		<ErrorContainer>
			<InlineError message={error.message || ''} size={SIZE.small} />
		</ErrorContainer>
	</>);
}

export default function FinalizeContainer(props) {
	const { resolver, connection, result } = props;
	const { error } = result;

	function onContinueClick() {
		if (error) {
			return resolver.reject(error);
		}

		return resolver.resolve();
	}

	return (
		<Center>
			<Container>
				<Header>
					{getHeaderContent(connection, error)}
				</Header>
				<ButtonsContainer>
					<StylishButton onClick={onContinueClick}><Translate id="action.continue" /></StylishButton>
				</ButtonsContainer>
			</Container>
		</Center>
	);
}
