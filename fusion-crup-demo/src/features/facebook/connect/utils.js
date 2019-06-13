export const PROVIDER_NAME = 'Facebook';

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
		reject() {
			return resolver.reject();
		},
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
