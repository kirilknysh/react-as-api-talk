import React from "react";
import { styled } from "fusion-plugin-styletron-react";

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
	const { resolver } = props;

	return (
		<Center>
			<Container>
				<Header>Facebook Connect</Header>
				<ButtonsContainer>
					<StylishButton onClick={resolver.resolve}>Confirm</StylishButton>
					<StylishButton onClick={resolver.reject}>Cancel</StylishButton>
				</ButtonsContainer>
			</Container>
		</Center>
	);
}
