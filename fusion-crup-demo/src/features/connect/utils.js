import connections from '../connections.js';

export function getAvailableConnections(experiments) {
	return connections.filter((connection) => {
		return experiments[connection.name];
	});
}

export function connectResolver(resolver) {
	return {
		resolve() {
			return resolver.resolve();
		},
		reject() {
			return resolver.reject();
		},
		notify(notification) {
			return resolver.notify && resolver.notify(notification);
		}
	};
}
