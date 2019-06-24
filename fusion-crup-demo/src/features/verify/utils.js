import { resolvePath } from '../../common/utils.js';

export function chooseResolver(resolver, history) {
	return {
		resolve(connection) {
			const location = Object.assign({}, history.location, {
				pathname: resolvePath(history.location.pathname, `../${connection.route}`),
				state: null,
			});

			return history.push(location);
		},
		reject() {
			return resolver.reject();
		},
	};
}

export function verifyConnectionResolver(resolver) {
	return {
		resolve() {
			return resolver.resolve();
		},
		reject() {
			return resolver.reject();
		},
	};
}
