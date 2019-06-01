import { styled } from "fusion-plugin-styletron-react";
import { Link } from 'fusion-plugin-react-router';

export const Center = styled('div', {
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export const StylishLink = styled(Link, {
	textDecoration: 'none',
	color: '#ccc',
});
