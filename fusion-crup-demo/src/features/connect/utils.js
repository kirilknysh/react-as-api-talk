const connections = [
	{ name: 'facebook', route: 'facebook', text: 'Facebook' },
	{ name: 'twitter', route: 'twitter', text: 'Twitter' },
	{ name: 'google', route: 'google', text: 'Google' },
	{ name: 'github', route: 'github', text: 'Github' },
];

export function getAvailableConnections(experiments) {
	return connections.filter((connection) => {
		return experiments[connection.name];
	})
}
