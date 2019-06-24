import React from 'react';
import { styled } from 'fusion-plugin-styletron-react';

import { Center } from '../layout.js';

const StyledIcon = styled('img', {
	width: '10vw',
});
const Container = styled('div', {
	width: '100%',
	height: '50vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	alignItems: 'center',
});

const Message = styled('div', {
	fontSize: '2rem',
});

export default function FullscreenError(props) {
	return (
		<Center>
			<Container>
				<StyledIcon src={'data:image/png;base64,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'} />
				{props.message && <Message>{props.message}</Message>}
			</Container>
		</Center>
	);
}
