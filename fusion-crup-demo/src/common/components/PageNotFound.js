import React from 'react';
import { assetUrl } from 'fusion-core';
import { NotFound } from 'fusion-plugin-react-router';
import { styled } from 'fusion-plugin-styletron-react';

const Container = styled('div', {
	width: '100%',
	background: '#000',
	color: '#fff',
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'stretch',
});
const ImageContainer = styled('div', {
	position: 'relative',
});
const Image = styled('img', {
	position: 'absolute',
	bottom: 0,
});
const Header = styled('div', {
	fontSize: '10rem',
	paddingTop: '20vh',
});

export default function PageNotFound(props) {
	return (
		<NotFound>
			<Container>
				<ImageContainer>
					<Image src={assetUrl('../../assets/not-found.gif')} />
				</ImageContainer>
				<Header>404</Header>
			</Container>
		</NotFound>
	);
}
