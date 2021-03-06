export function confirmationResolver(resolver, setStep) {
	return {
		resolve() {
			return setStep({ name: 'link', payload: null });
		},
		reject() {
			return resolver.reject();
		},
	};
}

export function linkResolver(resolver, setStep) {
	return {
		resolve() {
			return setStep({ name: 'finalize', payload: null });
		},
		reject(error) {
			return resolver.reject({ error });
		},
		notify(notification) {
			return resolver.notify(notification);
		}
	};
}

export function finalizeResolver(resolver) {
	return {
		resolve() {
			return resolver.resolve();
		},
		reject() {
			return resolver.reject();
		},
	};
}
