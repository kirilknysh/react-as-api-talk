import React from "react";
import { assetUrl } from "fusion-core";
import { styled } from "fusion-plugin-styletron-react";

const Container = styled('div', {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	border: '2px solid #ffa500',
	padding: '1rem 0',
	background: '#231700',
	color: '#ffa500',
});
const Icon = styled('img', {
	width: '6rem',
});
const Message = styled('div', {
	fontSize: '2rem',
});

export default function InlineError(props) {
	const message = props.message || '';

	return (
		<Container>
			<Icon src={assetUrl("../../assets/warning.png")} />
			<Message>{message}</Message>
		</Container>
	);
}
