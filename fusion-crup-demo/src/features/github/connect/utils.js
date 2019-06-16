export function linkResolver(resolver, setStep) {
	return {
		resolve() {
			return setStep({ name: 'finalize', payload: {} });
		},
		reject(error) {
			return setStep({ name: 'finalize', payload: { error } });
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
