import React from 'react';
import { assetUrl } from 'fusion-core';
import { styled } from 'fusion-plugin-styletron-react';

export const SIZE = {
	small: 'small',
	normal: 'normal',
	big: 'big',
};

const ICON_SIZE = {
	[SIZE.small]: 3,
	[SIZE.normal]: 6,
	[SIZE.big]: 9,
};
const MESSAGE_SIZE = {
	[SIZE.small]: 1.5,
	[SIZE.normal]: 2,
	[SIZE.big]: 2.5,
};
const CONTAINER_PADDING_SIZE = {
	[SIZE.small]: .5,
	[SIZE.normal]: 1,
	[SIZE.big]: 1.5,
};

const Container = styled('div', ({ size }) => {
	return {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		border: '2px solid #ffa500',
		padding: `${CONTAINER_PADDING_SIZE[size]}rem 0`,
		background: '#231700',
		color: '#ffa500',
	};
});
const Icon = styled('img', ({ size }) => {
	return {
		width: `${ICON_SIZE[size]}rem`,
	};
});
const Message = styled('div', ({ size }) => {
	return {
		fontSize: `${MESSAGE_SIZE[size]}rem`,
	};
});

export default function InlineError(props) {
	const { message, size } = props;

	return (
		<Container>
			<Icon src={assetUrl('../../assets/warning.png')} size={size} />
			<Message size={size}>{message || ''}</Message>
		</Container>
	);
}
