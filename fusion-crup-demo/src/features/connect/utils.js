import connections from '../connections.js';

export function getAvailableConnections(experiments) {
	return connections.filter((connection) => {
		return experiments[connection.name];
	})
}

export function connectResolver(resolver) {
	return {
		resolve() {
			console.log('connect resolver: resolve');
			return resolver.resolve();
		},
		reject() {
			console.log('connect resolver: reject');
			return resolver.reject();
		},
		notify(notification) {
			return console.log('connect resolver: notify', notification);
		}
	};
}
