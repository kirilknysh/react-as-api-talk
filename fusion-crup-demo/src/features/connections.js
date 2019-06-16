import { makeComponentLoader } from '../common/utils.js';

const connections = [
	{ name: 'facebook', route: 'facebook', text: 'Facebook', Connect: makeComponentLoader({ load: () => import('./facebook/connect/FacebookConnectContainer.js'), }) },
	{ name: 'twitter', route: 'twitter', text: 'Twitter' },
	{ name: 'google', route: 'google', text: 'Google' },
	{ name: 'github', route: 'github', text: 'Github', Connect: makeComponentLoader({ load: () => import('./github/connect/GithubConnectContainer.js'), }) },
];

export default connections;
